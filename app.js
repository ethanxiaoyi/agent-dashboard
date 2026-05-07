
const DATES = ["2026-04-04", "2026-04-05", "2026-04-06", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10", "2026-04-11", "2026-04-12", "2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17", "2026-04-18", "2026-04-19", "2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23", "2026-04-24", "2026-04-25", "2026-04-26", "2026-04-27", "2026-04-28", "2026-04-29", "2026-04-30", "2026-05-01", "2026-05-02"];
const TREND = {"total_qv": [383509.0, 374544.0, 305806.0, 256488.0, 244388.0, 240676.0, 259222.0, 309482.0, 284995.0, 242317.0, 238662.0, 245395.0, 249581.0, 282505.0, 331936.0, 293836.0, 283817.0, 278624.0, 233635.0, 283806.0, 295322.0, 351062.0, 340251.0, 294305.0, 274759.0, 319988.0, 385431.0, 408619.0, 411342.0], "big_search_qv": [269605.0, 262138.0, 220280.0, 189890.0, 181060.0, 174218.0, 182747.0, 217065.0, 201418.0, 173114.0, 170692.0, 175753.0, 177706.0, 197832.0, 230026.0, 205005.0, 212138.0, 210421.0, 164449.0, 213141.0, 216088.0, 256460.0, 255127.0, 218951.0, 199887.0, 241019.0, 286356.0, 276009.0, 274328.0], "cs_qv": [113904.0, 112406.0, 85526.0, 66598.0, 63328.0, 66458.0, 76475.0, 92417.0, 83577.0, 69203.0, 67970.0, 69642.0, 71875.0, 84673.0, 101910.0, 88831.0, 71679.0, 68203.0, 69186.0, 70665.0, 79234.0, 94602.0, 85124.0, 75354.0, 74872.0, 78969.0, 99075.0, 132610.0, 137014.0], "total_rate": [0.0097, 0.0098, 0.0101, 0.011, 0.011, 0.0106, 0.0098, 0.0093, 0.0096, 0.0104, 0.0104, 0.0104, 0.0103, 0.01, 0.0095, 0.0097, 0.0121, 0.0122, 0.0101, 0.0121, 0.011, 0.0105, 0.0112, 0.0122, 0.0115, 0.0126, 0.0119, 0.0096, 0.0097], "big_search_rate": [0.007, 0.0071, 0.0075, 0.0084, 0.0084, 0.0079, 0.0071, 0.0067, 0.007, 0.0077, 0.0076, 0.0077, 0.0076, 0.0072, 0.0068, 0.007, 0.0093, 0.0095, 0.0073, 0.0093, 0.0083, 0.0079, 0.0087, 0.0093, 0.0086, 0.0098, 0.0091, 0.0067, 0.0066], "cs_rate": [0.0984, 0.0974, 0.0971, 0.1004, 0.0983, 0.1011, 0.1019, 0.0981, 0.0988, 0.1059, 0.1032, 0.1011, 0.1022, 0.1064, 0.101, 0.1014, 0.108, 0.1046, 0.1045, 0.1056, 0.1059, 0.0997, 0.0988, 0.1093, 0.1107, 0.1119, 0.1119, 0.1077, 0.1058], "avg_turns": [1.1031, 1.1046, 1.1046, 1.1032, 1.0954, 1.1, 1.1031, 1.0994, 1.1014, 1.1018, 1.1005, 1.0971, 1.099, 1.1009, 1.0967, 1.099, 1.0825, 1.0794, 1.0994, 1.0822, 1.0901, 1.0904, 1.0905, 1.0955, 1.1041, 1.0931, 1.0832, 1.099, 1.1005], "retention_rate": [0.0252, 0.0238, 0.0189, 0.0169, 0.022, 0.022, 0.0217, 0.0233, 0.0201, 0.0176, 0.0215, 0.0218, 0.0222, 0.0223, 0.0232, 0.0201, 0.0166, 0.0353, 0.0203, 0.0228, 0.0237, 0.0233, 0.0231, 0.02, 0.0228, 0.0233, 0.0333, 0.0268, 0.0259]};

const PALETTE = ["#6366f1","#10b981","#f59e0b","#ef4444","#06b6d4","#8b5cf6","#f97316","#84cc16"];

Chart.defaults.color = "#9ca3af";
Chart.defaults.borderColor = "#2a2d3e";

function makeDataset(metric, label, color) {
  return {
    label,
    data: TREND[metric] || [],
    borderColor: color,
    backgroundColor: color + "25",
    borderWidth: 2,
    pointRadius: 2,
    pointHoverRadius: 5,
    tension: 0.35,
    fill: false,
    spanGaps: true,
  };
}

const chartConfig = (datasets) => ({
  type: "line",
  data: { labels: DATES, datasets },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 400 },
    plugins: {
      legend: { position: "top", labels: { boxWidth: 12, padding: 16, color: "#9ca3af" } },
      tooltip: {
        backgroundColor: "#1a1d27",
        borderColor: "#2a2d3e",
        borderWidth: 1,
        titleColor: "#f1f5f9",
        bodyColor: "#d1d5db",
        padding: 10,
      },
    },
    scales: {
      x: { ticks: { maxTicksLimit: 10, color: "#6b7280" }, grid: { color: "#1f2235" } },
      y: { ticks: { color: "#6b7280" }, grid: { color: "#1f2235" } },
    },
  },
});

const charts = {};

function initChart(id, metrics, labels) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  charts[id] = new Chart(ctx, chartConfig(
    metrics.map((m, i) => makeDataset(m, labels[i], PALETTE[i]))
  ));
}

// 初始化前先让所有 panel 可见，确保 canvas 尺寸正确
["panel-qv","panel-rate","panel-turns","panel-retention"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
});

initChart("chart-qv",        ["total_qv","big_search_qv","cs_qv"],               ["整体QV","大搜QV","垂搜QV"]);
initChart("chart-rate",      ["total_rate","big_search_rate","cs_rate"],          ["整体渗透率","大搜渗透率","垂搜渗透率"]);
initChart("chart-turns",     ["avg_turns"],                                        ["平均对话轮次"]);
initChart("chart-retention", ["retention_rate"],                                   ["次日留存率"]);

// 初始化完成后隐藏非激活 panel，只保留 panel-qv
["panel-rate","panel-turns","panel-retention"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
});

// 强制 resize 确保尺寸正确
Object.values(charts).forEach(c => c.resize());

document.getElementById("compare-tabs").addEventListener("click", function(e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  const name = btn.dataset.target;
  ["week","month"].forEach(n => document.getElementById("compare-" + n).classList.remove("active"));
  document.querySelectorAll("#compare-tabs .tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("compare-" + name).classList.add("active");
  btn.classList.add("active");
});

document.getElementById("chart-tabs").addEventListener("click", function(e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  const name = btn.dataset.target;
  // 隐藏所有 panel
  ["qv","rate","turns","retention"].forEach(n => {
    const el = document.getElementById("panel-" + n);
    if (el) el.style.display = "none";
  });
  // 显示目标 panel
  const target = document.getElementById("panel-" + name);
  if (target) target.style.display = "block";
  // 更新 tab 按钮状态
  document.querySelectorAll("#chart-tabs .tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  // resize + update 图表
  const chartId = "chart-" + name;
  if (charts[chartId]) {
    charts[chartId].resize();
    charts[chartId].update();
  }
});
