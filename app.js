
const DATES = ["2026-03-08", "2026-03-09", "2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13", "2026-03-14", "2026-03-15", "2026-03-16", "2026-03-17", "2026-03-18", "2026-03-19", "2026-03-20", "2026-03-21", "2026-03-22", "2026-03-23", "2026-03-24", "2026-03-25", "2026-03-26", "2026-03-27", "2026-03-28", "2026-03-29", "2026-03-30", "2026-03-31", "2026-04-01", "2026-04-02", "2026-04-03", "2026-04-04", "2026-04-05", "2026-04-06"];
const TREND = {"total_qv": [252326.0, 210280.0, 200781.0, 200539.0, 205274.0, 229064.0, 266143.0, 239947.0, 199968.0, 197095.0, 199588.0, 199367.0, 232985.0, 270974.0, 240985.0, 200379.0, 206791.0, 207368.0, 225706.0, 274707.0, 322130.0, 294133.0, 246592.0, 249810.0, 257999.0, 266794.0, 300426.0, 383509.0, 374544.0, 305806.0], "big_search_qv": [178762.0, 149657.0, 142197.0, 140225.0, 144236.0, 159915.0, 184798.0, 169459.0, 142907.0, 139639.0, 138863.0, 137395.0, 157853.0, 181593.0, 164708.0, 137166.0, 142754.0, 144429.0, 160236.0, 200497.0, 233535.0, 216424.0, 183496.0, 185235.0, 187808.0, 192935.0, 212814.0, 269605.0, 262138.0, 220280.0], "cs_qv": [73564.0, 60623.0, 58584.0, 60314.0, 61038.0, 69149.0, 81345.0, 70488.0, 57061.0, 57456.0, 60725.0, 61972.0, 75132.0, 89381.0, 76277.0, 63213.0, 64037.0, 62939.0, 65470.0, 74210.0, 88595.0, 77709.0, 63096.0, 64575.0, 70191.0, 73859.0, 87612.0, 113904.0, 112406.0, 85526.0], "total_rate": [0.0073, 0.0084, 0.0083, 0.0082, 0.0083, 0.008, 0.0074, 0.0076, 0.0084, 0.0085, 0.0085, 0.0082, 0.0079, 0.0076, 0.0078, 0.0086, 0.0089, 0.0088, 0.0095, 0.01, 0.0095, 0.0098, 0.0108, 0.0107, 0.0105, 0.0106, 0.0101, 0.0097, 0.0098, 0.0101], "big_search_rate": [0.0053, 0.0062, 0.006, 0.0059, 0.006, 0.0057, 0.0053, 0.0056, 0.0062, 0.0062, 0.0061, 0.0058, 0.0055, 0.0052, 0.0055, 0.006, 0.0063, 0.0063, 0.0069, 0.0075, 0.0071, 0.0074, 0.0083, 0.0082, 0.0079, 0.0079, 0.0073, 0.007, 0.0071, 0.0075], "cs_rate": [0.0788, 0.083, 0.0816, 0.0818, 0.0823, 0.0816, 0.0767, 0.0748, 0.0808, 0.0811, 0.0856, 0.0848, 0.0868, 0.085, 0.0837, 0.0926, 0.0934, 0.0901, 0.0922, 0.0944, 0.0893, 0.0895, 0.0954, 0.0959, 0.0993, 0.1015, 0.1031, 0.0984, 0.0974, 0.0971], "avg_turns": [1.1154, 1.1211, 1.122, 1.121, 1.1183, 1.1194, 1.114, 1.1158, 1.117, 1.1197, 1.1182, 1.1203, 1.1205, 1.1148, 1.1142, 1.1188, 1.1175, 1.1168, 1.1137, 1.1034, 1.099, 1.1011, 1.1041, 1.101, 1.1019, 1.1078, 1.1135, 1.1031, 1.1046, 1.1046], "retention_rate": [0.0194, 0.0159, 0.0211, 0.0212, 0.0217, 0.022, 0.0224, 0.0195, 0.0171, 0.021, 0.0213, 0.0211, 0.0221, 0.0223, 0.0188, 0.0159, 0.0218, 0.0219, 0.0219, 0.0222, 0.0235, 0.0204, 0.018, 0.0229, 0.0219, 0.023, 0.0235, 0.0252, 0.0238, 0.0189]};

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
