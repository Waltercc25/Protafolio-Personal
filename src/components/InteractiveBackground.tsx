"use client";

import { useEffect, useRef } from "react";

const SPACING = 48;
const INFLUENCE = 185;
const GLOW_INFLUENCE = 88;
const PULL = 0.28;
const SMOOTHING = 0.18;

type GridPoint = { bx: number; by: number; x: number; y: number };

function createGrid(width: number, height: number): GridPoint[][] {
  const cols = Math.ceil(width / SPACING) + 2;
  const rows = Math.ceil(height / SPACING) + 2;
  const grid: GridPoint[][] = [];

  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < cols; col++) {
      const bx = col * SPACING - SPACING;
      const by = row * SPACING - SPACING;
      grid[row][col] = { bx, by, x: bx, y: by };
    }
  }

  return grid;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function deformPoint(px: number, py: number, mx: number, my: number) {
  const dx = mx - px;
  const dy = my - py;
  const dist = Math.hypot(dx, dy);
  if (dist >= INFLUENCE) return { x: px, y: py };

  const t = smoothstep(1 - dist / INFLUENCE);
  return { x: px + dx * t * PULL, y: py + dy * t * PULL };
}

function getProximity(x: number, y: number, mx: number, my: number, radius = GLOW_INFLUENCE): number {
  const t = 1 - Math.hypot(x - mx, y - my) / radius;
  if (t <= 0) return 0;
  return smoothstep(t);
}

function getTheme(isLight: boolean) {
  return isLight
    ? {
        lineFar: "rgba(148, 163, 184, 0.38)",
        lineGlow: "rgba(6, 182, 212, 1)",
        sinkCenter: "rgba(100, 116, 139, 0.19)",
        sinkEdge: "rgba(148, 163, 184, 0.05)",
        bloom: "rgba(14, 165, 233, 0.24)",
      }
    : {
        lineFar: "rgba(71, 85, 105, 0.55)",
        lineGlow: "rgba(56, 189, 248, 1)",
        sinkCenter: "rgba(0, 0, 0, 0.28)",
        sinkEdge: "rgba(0, 0, 0, 0.07)",
        bloom: "rgba(34, 211, 238, 0.3)",
      };
}

function drawKineticGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  grid: GridPoint[][],
  mx: number,
  my: number,
  active: boolean,
  isLight: boolean
) {
  const theme = getTheme(isLight);
  ctx.clearRect(0, 0, width, height);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const p = grid[row][col];
      if (active) {
        const d = deformPoint(p.bx, p.by, mx, my);
        p.x = d.x;
        p.y = d.y;
      } else {
        p.x = p.bx;
        p.y = p.by;
      }
    }
  }

  if (active) {
    const sink = ctx.createRadialGradient(mx, my, 0, mx, my, GLOW_INFLUENCE);
    sink.addColorStop(0, theme.sinkCenter);
    sink.addColorStop(0.55, theme.sinkEdge);
    sink.addColorStop(1, "transparent");
    ctx.fillStyle = sink;
    ctx.fillRect(0, 0, width, height);

    const bloom = ctx.createRadialGradient(mx, my, GLOW_INFLUENCE * 0.12, mx, my, GLOW_INFLUENCE * 0.65);
    bloom.addColorStop(0, theme.bloom);
    bloom.addColorStop(1, "transparent");
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, width, height);
  }

  const drawLines = (horizontal: boolean) => {
    const primary = horizontal ? grid.length : grid[0]?.length ?? 0;
    const secondary = horizontal ? grid[0]?.length ?? 0 : grid.length;

    for (let i = 0; i < primary; i++) {
      for (let j = 0; j < secondary - 1; j++) {
        const p1 = horizontal ? grid[i][j] : grid[j][i];
        const p2 = horizontal ? grid[i][j + 1] : grid[j + 1][i];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = theme.lineFar;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.stroke();
      }
    }
  };

  const drawGlowSegments = (horizontal: boolean) => {
    const primary = horizontal ? grid.length : grid[0]?.length ?? 0;
    const secondary = horizontal ? grid[0]?.length ?? 0 : grid.length;
    const glowColor = isLight ? "56, 189, 248" : "56, 189, 248";

    for (let i = 0; i < primary; i++) {
      for (let j = 0; j < secondary - 1; j++) {
        const p1 = horizontal ? grid[i][j] : grid[j][i];
        const p2 = horizontal ? grid[i][j + 1] : grid[j + 1][i];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const proximity = getProximity(midX, midY, mx, my);
        if (proximity <= 0.12) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${glowColor}, ${0.18 + proximity * 0.28})`;
        ctx.lineWidth = 1;
        ctx.shadowColor = `rgba(${glowColor}, ${0.2 + proximity * 0.25})`;
        ctx.shadowBlur = 2 + proximity * 4;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }
  };

  if (grid.length > 0 && grid[0].length > 0) {
    drawLines(true);
    drawLines(false);
    if (active) {
      drawGlowSegments(true);
      drawGlowSegments(false);
    }
  }
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridRef = { current: [] as GridPoint[][] };
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let active = false;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gridRef.current = createGrid(w, h);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      active = true;
    };

    const onLeave = () => {
      active = false;
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      if (active) {
        current.x += (target.x - current.x) * SMOOTHING;
        current.y += (target.y - current.y) * SMOOTHING;
      }

      drawKineticGrid(ctx, w, h, gridRef.current, current.x, current.y, active, isLight);
      frame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-background" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
