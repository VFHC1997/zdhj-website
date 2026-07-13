(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const key = params.get("news");
  const articles = {
    shangao: {
      title: "强强对话・共探新局一山高咨询与中大恒建协同启航",
      date: "2026 年 1 月 26 日",
      image: "assets/img/news/news-02.jpg",
      body: [
        '<p class="gt-news-lead">2026 年 1 月 26 日，<span class="gt-news-keyword">山东高速工程咨询集团有限公司</span>景国建博士与牛腾经理一行莅临中大恒建，双方围绕<span class="gt-news-keyword">产品研发</span>、<span class="gt-news-keyword">技术优势</span>与<span class="gt-news-keyword">场景应用</span>等核心议题，展开深入技术交流与战略研讨。</p>',
        '<h4 class="mt-4">嘉宾到访，带来行业前沿视角</h4>',
        '<p class="mt-3">景国建博士长期深耕<span class="gt-news-keyword">交通基础设施建设</span>、<span class="gt-news-keyword">工程材料研发</span>、智能建造技术等前沿领域，不仅具备深厚的理论功底，更主导参与了多项重大工程的技术攻关与咨询工作，在行业内颇具影响力。</p>',
        '<p class="mt-3">牛腾经理拥有丰富的<span class="gt-news-keyword">项目实战经验</span>与卓越的管理才能，深谙工程咨询市场规律，在项目统筹、资源整合、客户服务与市场开拓等方面业绩斐然，是连接技术创新与市场实践的重要桥梁。</p>',
        '<p class="mt-3">两位专家从行业标杆企业远道而来，带来的宝贵经验与独到见解，必将为双方深化合作提供关键赋能，助力彼此在行业赛道上行稳致远。</p>',
        '<div class="gt-details-image mt-4 mb-4"><img src="assets/img/news/news-02-01.jpg" alt="强强对话・共探新局一山高咨询与中大恒建协同启航"></div>',
        '<h4 class="mt-4">技术探讨，聚焦工程材料应用</h4>',
        '<p class="mt-3">交流中，双方聚焦中大恒建在交通与建筑领域的核心材料及解决方案，开展了系统性的成果展示与前沿关键技术攻坚研讨，重点围绕两大方向深入交流：</p>',
        '<p class="mt-3">1、<span class="gt-news-keyword">特种工程材料</span>：包括用于路面快速修复的「混凝土基面薄层快速修复技术」以及高耐久性的「<span class="gt-news-keyword">MMA彩色防滑材料</span>」。</p>',
        '<p class="mt-3">2、<span class="gt-news-keyword">高性能混凝土产品</span>：涵盖「<span class="gt-news-keyword">UHPC超高性能混凝土</span>」在古建筑、旧危桥穿涵特种加固技术及工业化预制构件方面的创新应用。</p>',
        '<p class="mt-3">双方就产品研发突破、核心性能亮点，以及在<span class="gt-news-keyword">桥梁</span>、<span class="gt-news-keyword">道路</span>、<span class="gt-news-keyword">市政建筑</span>等领域的应用前景展开建设性探讨，在思想碰撞中凝聚前瞻共识，共同开拓合作新空间。</p>',
        '<h4 class="mt-4">收获与期许</h4>',
        '<p class="mt-3">此次交流中，山东高速工程咨询集团两位专家的深刻见解与宝贵经验，与中大恒建团队的实践思考相互印证，不仅深化了双方对行业技术与市场趋势的认知，更为中大恒建明晰产品深化方向、拓展市场布局提供了关键启发。</p>',
        '<p class="mt-3">未来，双方将进一步深化战略对接、凝聚合作共识，携手拓展合作新维度、开辟发展新空间，共同擘画协同共进、互利共赢的战略新篇章！</p>'
      ],
      tags: ["山东高速工程咨询集团", "特种工程材料", "UHPC超高性能混凝土"]
    },
    korea: {
      title: "中大恒建 — 韩国参展之行圆满落幕",
      date: "韩国第 13 届国际新材料技术大展",
      image: "assets/img/news/news-03.jpg",
      body: [
        '<h4>展会聚焦，链接全球新材料资源</h4>',
        '<p class="gt-news-lead">历时3天，<span class="gt-news-keyword">韩国第13届国际新材料技术大展(INTRA)</span>在首尔COEX会展中心圆满落幕。作为韩国唯一商务级新材料综合展会，本届展会汇聚全球200余个尖端材料领域企业，得到韩国产业通商资源部专项支持。</p>',
        '<p class="mt-3">本次展会，<strong>中大恒建</strong>携<span class="gt-news-keyword">高强无收缩灌浆料（CGM）</span>、<span class="gt-news-keyword">风电专用灌浆料（HPG）</span>惊艳亮相，吸引了众多新老朋友驻足交流，收获满满！现在，让我们一起回顾那些精彩瞬间！</p>',
        '<div class="row g-4 mt-2 mb-4"><div class="col-md-6"><div class="gt-details-image"><img src="assets/img/news/news-03-01.jpg" alt="中大恒建韩国参展现场"></div></div><div class="col-md-6"><div class="gt-details-image"><img src="assets/img/news/news-03-02.jpg" alt="中大恒建韩国参展交流"></div></div></div>',
        '<h4 class="mt-4">展区交流，呈现建筑新材料解决方案</h4><p class="mt-3">在中大恒建的展区，访客感受到的不仅是产品，更是<span class="gt-news-keyword">新材料</span>为建筑未来勾勒的全新可能。因此，镜头所记录的，不只是一次次讲解，更是一场场思维碰撞与价值共识的起点。我们深信，这些在展会中播下的合作种子，必将成长为推动行业进步的参天大树。</p>',
        '<p class="mt-3">展区集中呈现了包括<span class="gt-news-keyword">高强无收缩灌浆料（CGM）</span>、<span class="gt-news-keyword">风电专用灌浆料（HPG）</span>、<span class="gt-news-keyword">海上风电专用灌浆料</span>等全面覆盖现代建筑与工程材料的关键领域。</p>',
        '<h4 class="mt-4">感恩致谢与未来展望</h4>',
        '<p class="mt-3">展会有期，征程无限。此次韩国之行，我们满载海外客户与伙伴的认可与赞誉，也再次坚定了我们走向全球市场的信心与步伐。</p>',
        '<p class="mt-3"><span class="gt-news-keyword">中大恒建（北京）新材料科技有限公司</span>始终以材料科学与工程学为根基，坚持高科技创新路线，构建了集研发、生产与应用于一体的全产业链创新体系，聚焦建筑新材料领域的技术突破与产业革新。我们以「<span class="gt-news-keyword">双轮驱动</span>」战略为核心竞争力，通过新材料研发与新技术转化的深度融合，持续夯实企业在全球建筑新材料领域的科创实力。</p>',
        '<p class="mt-3">未来，中大恒建将继续以“<span class="gt-news-keyword">创新科技，筑联全球</span>”为愿景，与全球伙伴携手，共同推动建筑建材行业向更高质量、更可持续的方向发展。</p>'
      ],
      tags: ["韩国 INTRA", "高强无收缩灌浆料", "风电专用灌浆料"]
    }
  };

  const article = articles[key];
  if (!article) {
    return;
  }

  const mainImage = document.querySelector("#news-detail-main-image");
  const contentNode = document.querySelector("#news-detail-content");
  const breadcrumbTitle = document.querySelector(".gt-breadcrumb-items li:last-child");
  const pageTitle = document.querySelector("#news-detail-page-title");

  document.title = article.title + " - 中大恒建";

  if (pageTitle) {
    pageTitle.textContent = article.title;
  }

  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = article.title;
  }

  if (mainImage) {
    mainImage.setAttribute("src", article.image);
    mainImage.setAttribute("alt", article.title);
  }

  if (!contentNode) {
    return;
  }

  const tags = article.tags.map(function (tag) {
    return '<a href="news-details.html?news=' + key + '">' + tag + '</a>';
  }).join("");

  contentNode.innerHTML = [
    '<h3>' + article.title + '</h3>',
    '<ul class="gt-date-list mb-4">',
    '<li><i class="fa-solid fa-calendar-days"></i>' + article.date + '</li>',
    '</ul>'
  ].concat(article.body, [
    '<div class="row gt-tag-share-wrap mt-4 mb-5 gt-news-keyword-tags">',
    '<div class="col-12"><div class="tagcloud">',
    '<span>关键词:</span>',
    tags,
    '</div></div>',
    '</div>'
  ]).join("");
})();