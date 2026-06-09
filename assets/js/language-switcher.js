(function () {
  "use strict";

  const STORAGE_KEY = "zhongda-hengjian-language";
  const DEFAULT_LANG = "zh";
  const BRAND_EN = "ZHONGDA HENGJIAN (BEIJING) NEW MATERIAL TECHNOLOGY CO., LTD";
  const BRAND_ZH = "\u4e2d\u5927\u6052\u5efa\uff08\u5317\u4eac\uff09\u65b0\u6750\u6599\u79d1\u6280\u6709\u9650\u516c\u53f8";
  const PRELOADER_BRAND_EN = "ZHONGDAHENGJIAN";
  const PRELOADER_BRAND_ZH = "\u4e2d\u5927\u6052\u5efa";

  const translations = {
    [BRAND_EN]: BRAND_ZH,
    ["Welcome to " + BRAND_EN]: "\u6b22\u8fce\u6765\u5230" + BRAND_ZH,
    [BRAND_EN + " - Construction and Architecture HTML Template"]: BRAND_ZH + " - \u5efa\u7b51\u4e0e\u5efa\u7b51\u8bbe\u8ba1\u7f51\u7ad9\u6a21\u677f",
    [BRAND_EN + " combines solid design with advanced features to build stunning construction websites. Perfect for contractors, architecture studios, and renovation companies."]: BRAND_ZH + "\u5c06\u7a33\u5065\u7684\u89c6\u89c9\u8bbe\u8ba1\u4e0e\u5148\u8fdb\u529f\u80fd\u7ed3\u5408\uff0c\u5e2e\u52a9\u627f\u5305\u5546\u3001\u5efa\u7b51\u8bbe\u8ba1\u5de5\u4f5c\u5ba4\u548c\u88c5\u4fee\u516c\u53f8\u6253\u9020\u4e13\u4e1a\u7f51\u7ad9\u3002",
    [BRAND_EN + " combines solid design with advanced features to build stunning construction websites. Perfect for contractors, architecture studios, and renovation companies. Create a strong online presence and grow your business with confidence."]: BRAND_ZH + "\u5c06\u7a33\u5065\u7684\u89c6\u89c9\u8bbe\u8ba1\u4e0e\u5148\u8fdb\u529f\u80fd\u7ed3\u5408\uff0c\u5e2e\u52a9\u627f\u5305\u5546\u3001\u5efa\u7b51\u8bbe\u8ba1\u5de5\u4f5c\u5ba4\u548c\u88c5\u4fee\u516c\u53f8\u6253\u9020\u4e13\u4e1a\u7f51\u7ad9\uff0c\u5efa\u7acb\u66f4\u5f3a\u7684\u7ebf\u4e0a\u5f62\u8c61\uff0c\u5e76\u7a33\u6b65\u62d3\u5c55\u4e1a\u52a1\u3002",
    [BRAND_EN + " Architecture and Interior Design Studio, providing clients with all services relating to Architecture & Interior Design."]: BRAND_ZH + "\u662f\u4e13\u6ce8\u4e8e\u5efa\u7b51\u8bbe\u8ba1\u4e0e\u5ba4\u5185\u8bbe\u8ba1\u7684\u4e13\u4e1a\u56e2\u961f\uff0c\u4e3a\u5ba2\u6237\u63d0\u4f9b\u5efa\u7b51\u4e0e\u5ba4\u5185\u8bbe\u8ba1\u76f8\u5173\u7684\u5168\u6d41\u7a0b\u670d\u52a1\u3002",
    "Loading": "\u52a0\u8f7d\u4e2d",
    "Contact Info": "\u8054\u7cfb\u4fe1\u606f",
    "Main Street, Melbourne, Australia": "\u6fb3\u5927\u5229\u4e9a\u58a8\u5c14\u672c\u4e3b\u8857",
    "Mod-friday, 09am -05pm": "\u5468\u4e00\u81f3\u5468\u4e94\uff0c09:00 - 17:00",
    "get a quote": "\u8054\u7cfb\u6211\u4eec",
    "Free Quote": "\u8054\u7cfb\u6211\u4eec",
    "Home": "\u9996\u9875",
    "Multi Page": "\u591a\u9875\u9762",
    "Constraction": "\u5efa\u7b51\u65bd\u5de5",
    "Construction": "\u5efa\u7b51\u5de5\u7a0b",
    "Architecture": "\u5efa\u7b51\u8bbe\u8ba1",
    "Roofing Home": "\u5c4b\u9762\u5de5\u7a0b",
    "Solar": "\u592a\u9633\u80fd",
    "Industry": "\u5de5\u4e1a\u5236\u9020",
    "About Us": "\u5173\u4e8e\u6211\u4eec",
    "ABOUT US": "\u5173\u4e8e\u6211\u4eec",
    "Pages": "\u56e2\u961f",
    "TEAM": "??",
    "OUR TEAM": "?????",
    "Team": "\u56e2\u961f",
    "Our Team": "\u6211\u4eec\u7684\u56e2\u961f",
    "Team Details": "\u56e2\u961f\u8be6\u60c5",
    "Our Project": "\u9879\u76ee\u6848\u4f8b",
    "Project Details": "\u9879\u76ee\u8be6\u60c5",
    "Product Introduction": "\u4ea7\u54c1",
    "Products": "\u4ea7\u54c1",
    "SHOP INFO": "\u4ea7\u54c1\u4fe1\u606f",
    "Shop Info": "\u4ea7\u54c1\u4fe1\u606f",
    "All Categories": "\u5168\u90e8\u5206\u7c7b",
    "Drilling Tools": "\u94bb\u5b54\u5de5\u5177",
    "Cutting Tools": "\u5207\u5272\u5de5\u5177",
    "Hand Tools": "\u624b\u52a8\u5de5\u5177",
    "Parts": "\u914d\u4ef6",
    "Showing 0 of 0 results": "\u663e\u793a 0 \u6761\uff0c\u5171 0 \u6761\u7ed3\u679c",
    "Shop Details": "\u4ea7\u54c1\u8be6\u60c5",
    "SERVICES": "\u6211\u4eec\u7684\u670d\u52a1",
    "Services": "\u670d\u52a1",
    "Service Page": "\u670d\u52a1\u9875\u9762",
    "Service Details": "\u670d\u52a1\u8be6\u60c5",
    "News": "\u65b0\u95fb",
    "News Grid": "\u65b0\u95fb\u7f51\u683c",
    "News Standard": "\u65b0\u95fb\u5217\u8868",
    "News Details": "\u65b0\u95fb\u8be6\u60c5",
    "Blog": "\u65b0\u95fb",
    "Blog Grid": "\u65b0\u95fb\u7f51\u683c",
    "Blog Standard": "\u65b0\u95fb\u5217\u8868",
    "Blog Details": "\u65b0\u95fb\u8be6\u60c5",
    "Contact Us": "\u8054\u7cfb\u6211\u4eec",
    "CONTACT US": "\u8054\u7cfb\u6211\u4eec",
    "Switch language": "\u5207\u6362\u8bed\u8a00",
    "Search Here...": "\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9...",
    "search submit": "\u63d0\u4ea4\u641c\u7d22",
    "Modern": "\u73b0\u4ee3",
    "& Architecture": "\u4e0e\u5efa\u7b51\u8bbe\u8ba1",
    "Jour projects": "\u6211\u4eec\u7684\u9879\u76ee",
    "our service": "\u6211\u4eec\u7684\u670d\u52a1",
    "WE ARE THE LEADER IN THE ARCHITECTURA!": "\u6211\u4eec\u662f\u5efa\u7b51\u8bbe\u8ba1\u9886\u57df\u7684\u9886\u5148\u8005\uff01",
    "After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western United States.": "\u5728\u6728\u5236\u54c1\u884c\u4e1a\u53d6\u5f97\u4e8c\u5341\u591a\u5e74\u6210\u529f\u540e\uff0cBilder \u5bb6\u65cf\u4e8e 2009 \u5e74\u521b\u7acb\u6295\u8d44\u4e1a\u52a1\uff0c\u4e13\u6ce8\u4e8e\u7f8e\u56fd\u897f\u90e8\u623f\u5730\u4ea7\u9886\u57df\u3002",
    "After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture.": "\u5728\u6728\u5236\u54c1\u884c\u4e1a\u79ef\u7d2f\u4e8c\u5341\u591a\u5e74\u7ecf\u9a8c\u540e\uff0cBilder \u5bb6\u65cf\u521b\u7acb\u4e86\u81ea\u5df1\u7684\u6295\u8d44\u4e8b\u4e1a\u3002",
    "After more than twenty years of success in the wood products industry, the Bilder family.": "\u5728\u6728\u5236\u54c1\u884c\u4e1a\u6210\u529f\u53d1\u5c55\u4e8c\u5341\u591a\u5e74\u540e\uff0cBilder \u5bb6\u65cf\u7ee7\u7eed\u62d3\u5c55\u4e1a\u52a1\u3002",
    "After more than twenty success in the wood products industry, the Bilder family founded.": "\u5728\u6728\u5236\u54c1\u884c\u4e1a\u53d6\u5f97\u591a\u5e74\u6210\u529f\u540e\uff0cBilder \u5bb6\u65cf\u521b\u7acb\u4e86\u5168\u65b0\u4e8b\u4e1a\u3002",
    "Innovative Eco Power": "\u521b\u65b0\u751f\u6001\u80fd\u6e90",
    "Advanced Technology": "\u5148\u8fdb\u6280\u672f",
    "Regularly Maintainin": "\u5b9a\u671f\u7ef4\u62a4",
    "Comprehensive Services": "\u5168\u9762\u670d\u52a1",
    "OUR SERVICES": "\u6211\u4eec\u7684\u670d\u52a1",
    "Our Services": "\u670d\u52a1",
    "EXPLORE OUR SERVICES": "\u63a2\u7d22\u6211\u4eec\u7684\u670d\u52a1",
    "Building Construction": "\u5efa\u7b51\u65bd\u5de5",
    "Read More": "\u4e86\u89e3\u66f4\u591a",
    "READ MORE": "\u4e86\u89e3\u66f4\u591a",
    "LRAR MORE": "\u4e86\u89e3\u66f4\u591a",
    "RRAD MORE": "\u4e86\u89e3\u66f4\u591a",
    "Architecture Design": "\u5efa\u7b51\u8bbe\u8ba1",
    "Building Renovation": "\u5efa\u7b51\u7ffb\u65b0",
    "OUR WORK": "\u6211\u4eec\u7684\u4f5c\u54c1",
    "EXPLORE RECENT PROJECTS": "\u67e5\u770b\u8fd1\u671f\u9879\u76ee",
    "Engineering Design NYC": "\u7ebd\u7ea6\u5de5\u7a0b\u8bbe\u8ba1",
    "In addition to competition companies also face challenges related": "\u9664\u4e86\u5e02\u573a\u7ade\u4e89\uff0c\u4f01\u4e1a\u8fd8\u9700\u5e94\u5bf9\u9879\u76ee\u534f\u8c03\u3001\u6210\u672c\u63a7\u5236\u548c\u8d28\u91cf\u4ea4\u4ed8\u7b49\u6311\u6218\u3002",
    "Construction Engineering": "\u5efa\u7b51\u5de5\u7a0b",
    "Telecommunication Towers": "\u901a\u4fe1\u5854\u5efa\u8bbe",
    "Development Projects": "\u5f00\u53d1\u9879\u76ee",
    "Corporate Headquarters Build": "\u4f01\u4e1a\u603b\u90e8\u5efa\u8bbe",
    "Completed": "\u5df2\u5b8c\u6210",
    "Projects": "\u9879\u76ee",
    "Experienced": "\u7ecf\u9a8c\u4e30\u5bcc\u7684",
    "Workers": "\u5de5\u4f5c\u4eba\u5458",
    "Happy": "\u6ee1\u610f",
    "Customer": "\u5ba2\u6237",
    "Award": "\u5956\u9879",
    "WHATS REASONS": "\u9009\u62e9\u7406\u7531",
    "WHY CHOOSE US": "\u4e3a\u4ec0\u4e48\u9009\u62e9\u6211\u4eec",
    "At Bconta, we believe construction is more than just building it\u2019s about creating spaces that inspire and endure. With years of expertise, a skilled team, and a passion for precision": "\u6211\u4eec\u76f8\u4fe1\uff0c\u5efa\u7b51\u4e0d\u53ea\u662f\u642d\u5efa\u7ed3\u6784\uff0c\u66f4\u662f\u521b\u9020\u5177\u6709\u542f\u53d1\u6027\u548c\u6301\u4e45\u4ef7\u503c\u7684\u7a7a\u95f4\u3002\u51ed\u501f\u591a\u5e74\u4e13\u4e1a\u7ecf\u9a8c\u3001\u6210\u719f\u56e2\u961f\u548c\u5bf9\u7cbe\u51c6\u65bd\u5de5\u7684\u575a\u6301\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u9879\u76ee\u63d0\u4f9b\u53ef\u9760\u4ea4\u4ed8\u3002",
    "EXPERT & PROFESSIONAL": "\u4e13\u5bb6\u7ea7\u4e13\u4e1a\u56e2\u961f",
    "Lorem is Ipsum is simply is design iomyi is text Lorem.": "\u6211\u4eec\u4ee5\u6e05\u6670\u7684\u6d41\u7a0b\u3001\u4e13\u4e1a\u7684\u8bbe\u8ba1\u548c\u7a33\u5b9a\u7684\u4ea4\u4ed8\uff0c\u4fdd\u969c\u9879\u76ee\u987a\u5229\u63a8\u8fdb\u3002",
    "HIGHT QUALITY WORK": "\u9ad8\u54c1\u8d28\u5de5\u7a0b",
    "PROFESSIONAL APPROACH": "\u4e13\u4e1a\u65b9\u6cd5",
    "TESTIMONIAL": "\u5ba2\u6237\u8bc1\u8a00",
    "HAPPY CUSTOMERS SAID": "\u5ba2\u6237\u8bc4\u4ef7",
    "Don\u2019t buy this theme, you won\u2019t be able to resist its charm. Right, like you\u2019re charmed. A theme that is truly multipurpose and flexible.": "\u8fd9\u5957\u6a21\u677f\u517c\u5177\u901a\u7528\u6027\u548c\u7075\u6d3b\u6027\uff0c\u9002\u5408\u5efa\u7b51\u3001\u5de5\u7a0b\u3001\u88c5\u4fee\u4e0e\u76f8\u5173\u670d\u52a1\u4f01\u4e1a\u5feb\u901f\u642d\u5efa\u4e13\u4e1a\u7f51\u7ad9\u3002",
    "Construction Engineer": "\u5efa\u7b51\u5de5\u7a0b\u5e08",
    "Construction Engineerr": "\u5efa\u7b51\u5de5\u7a0b\u5e08",
    "THIS IS THE OFFICIAL SHOP": "\u5b98\u65b9\u5546\u57ce",
    "FEATURED PRODUCTS": "\u7cbe\u9009\u4ea7\u54c1",
    "VIEW ALL SHOP": "\u67e5\u770b\u5168\u90e8\u4ea7\u54c1",
    "1 Review": "1 \u6761\u8bc4\u4ef7",
    "(1 Review)": "(1 \u6761\u8bc4\u4ef7)",
    "(79+ Review)": "(79+ \u6761\u8bc4\u4ef7)",
    "ADD TO CART": "\u52a0\u5165\u8d2d\u7269\u8f66",
    "Add to cart": "\u52a0\u5165\u8d2d\u7269\u8f66",
    "View Product Details": "\u67e5\u770b\u4ea7\u54c1\u8be6\u60c5",
    "Drill Machine": "\u94bb\u673a",
    "Professional Jigsaw": "\u4e13\u4e1a\u66f2\u7ebf\u952f",
    "Screwdriver Drill": "\u7535\u52a8\u87ba\u4e1d\u5200",
    "Wood Cutting": "\u6728\u6750\u5207\u5272\u673a",
    "Screwdriver Set": "\u87ba\u4e1d\u5200\u5957\u88c5",
    "Battery screwdriver": "\u5145\u7535\u87ba\u4e1d\u5200",
    "Saw Machine": "\u952f\u5207\u8bbe\u5907",
    "Grinder Tool": "\u78e8\u524a\u5de5\u5177",
    "Brand:": "\u54c1\u724c\uff1a",
    "Cordless Screwdriver Drill": "\u65e0\u7ebf\u7535\u52a8\u87ba\u4e1d\u5200",
    "Price:": "\u4ef7\u683c\uff1a",
    "16 people are viewing this right now": "16 \u4eba\u6b63\u5728\u67e5\u770b\u8be5\u4ea7\u54c1",
    "Color:": "\u989c\u8272\uff1a",
    "Hurry! Only 12 units left in stock!": "\u8bf7\u5c3d\u5feb\u4e0b\u5355\uff01\u5e93\u5b58\u4ec5\u5269 12 \u4ef6\u3002",
    "Buy It Now": "\u7acb\u5373\u8d2d\u4e70",
    "Certification:": "\u8ba4\u8bc1\uff1a",
    "Meets DOT, ECE, or Snell safety standards": "\u7b26\u5408 DOT\u3001ECE \u6216 Snell \u5b89\u5168\u6807\u51c6",
    "Maximum Protection:": "\u6700\u5927\u9632\u62a4\uff1a",
    "Full coverage for your head, face, and chin": "\u5168\u9762\u8986\u76d6\u5934\u90e8\u3001\u9762\u90e8\u548c\u4e0b\u5df4",
    "Share With:": "\u5206\u4eab\u81f3\uff1a",
    "Guaranteed": "\u4fdd\u969c",
    "Safe & Secure Purchase": "\u5b89\u5168\u53ef\u9760\u8d2d\u4e70",
    "OUR FAQS": "\u5e38\u89c1\u95ee\u9898",
    "FREQUENTLY ASKED QUESTIONS": "\u5e38\u89c1\u95ee\u9898",
    "Frequently Asked Questions": "\u5e38\u89c1\u95ee\u9898",
    "Frequently Asked Question": "\u5e38\u89c1\u95ee\u9898",
    "How do i get started with green energy?": "\u6211\u8be5\u5982\u4f55\u5f00\u59cb\u4f7f\u7528\u7eff\u8272\u80fd\u6e90\uff1f",
    "Can i use green energy in my home or business?": "\u5bb6\u5ead\u6216\u4f01\u4e1a\u53ef\u4ee5\u4f7f\u7528\u7eff\u8272\u80fd\u6e90\u5417\uff1f",
    "Green energy reliable during bad weather?": "\u6076\u52a3\u5929\u6c14\u4e0b\u7eff\u8272\u80fd\u6e90\u4ecd\u7136\u53ef\u9760\u5417\uff1f",
    "Do you offer a free, no obligation quotation?": "\u4f60\u4eec\u662f\u5426\u63d0\u4f9b\u514d\u8d39\u4e14\u65e0\u5f3a\u5236\u4e49\u52a1\u7684\u62a5\u4ef7\uff1f",
    "success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western.": "\u5728\u6728\u5236\u54c1\u884c\u4e1a\u53d6\u5f97\u6210\u529f\u540e\uff0cBilder \u5bb6\u65cf\u4e8e 2009 \u5e74\u521b\u7acb\u6295\u8d44\u4e1a\u52a1\uff0c\u5e76\u5f00\u59cb\u6295\u8d44\u897f\u90e8\u623f\u5730\u4ea7\u9879\u76ee\u3002",
    "NEWS & BLOG": "\u65b0\u95fb\u4e0e\u535a\u5ba2",
    "BLOG & NEWS": "\u535a\u5ba2\u4e0e\u65b0\u95fb",
    "BLOG STANDARD": "\u65b0\u95fb\u5217\u8868",
    "LATEST NEWS & ARTICLES": "\u6700\u65b0\u65b0\u95fb\u4e0e\u6587\u7ae0",
    "VIEW ALL News": "\u67e5\u770b\u5168\u90e8\u65b0\u95fb",
    "High quality work for Demand our customer.": "\u4ee5\u9ad8\u54c1\u8d28\u5de5\u7a0b\u6ee1\u8db3\u5ba2\u6237\u9700\u6c42\u3002",
    "19 Comments": "19 \u6761\u8bc4\u8bba",
    "23 Comments": "23 \u6761\u8bc4\u8bba",
    "02 Comments": "02 \u6761\u8bc4\u8bba",
    "11 March 2025": "2025 \u5e74 3 \u6708 11 \u65e5",
    "13 June, 2025": "2025 \u5e74 6 \u6708 13 \u65e5",
    "22 July, 2025": "2025 \u5e74 7 \u6708 22 \u65e5",
    "September 26, 2025": "2025 \u5e74 9 \u6708 26 \u65e5",
    "Dce 23,2025": "2025 \u5e74 12 \u6708 23 \u65e5",
    "February 11, 2024": "2024 \u5e74 2 \u6708 11 \u65e5",
    "February 10, 2024 at 2:37 pm": "2024 \u5e74 2 \u6708 10 \u65e5 14:37",
    "Satisfection for the customer our first parity.": "\u5ba2\u6237\u6ee1\u610f\u59cb\u7ec8\u662f\u6211\u4eec\u7684\u9996\u8981\u76ee\u6807\u3002",
    "How to Choose the Best Freight Solution Your Business": "\u5982\u4f55\u4e3a\u4f01\u4e1a\u9009\u62e9\u6700\u5408\u9002\u7684\u8fd0\u8f93\u89e3\u51b3\u65b9\u6848",
    "START TODAY!": "\u4eca\u5929\u5c31\u5f00\u59cb\uff01",
    "JOIN US TODAY": "\u7acb\u5373\u52a0\u5165\u6211\u4eec",
    "JOIN NOW": "\u7acb\u5373\u52a0\u5165",
    "It is a long established fact that a reader will be distracted the road readable content of a page when looking at layout. of a page when looking at layout.": "\u6211\u4eec\u4e13\u6ce8\u4e8e\u5efa\u7b51\u65bd\u5de5\u3001\u5efa\u7b51\u8bbe\u8ba1\u548c\u9879\u76ee\u7ba1\u7406\uff0c\u4ee5\u53ef\u9760\u8d28\u91cf\u548c\u9ad8\u6548\u534f\u4f5c\u4e3a\u5ba2\u6237\u521b\u9020\u957f\u671f\u4ef7\u503c\u3002",
    "Phone": "\u7535\u8bdd",
    "Location": "\u5730\u5740",
    "Toronto, Montreal, City": "\u591a\u4f26\u591a\u3001\u8499\u7279\u5229\u5c14",
    "Useful Links": "\u5e38\u7528\u94fe\u63a5",
    "Team Members": "\u56e2\u961f\u6210\u5458",
    "24/7 Online Support": "24/7 \u5728\u7ebf\u652f\u6301",
    "Partners": "\u5408\u4f5c\u4f19\u4f34",
    "Project Management": "\u9879\u76ee\u7ba1\u7406",
    "Building Maintenance": "\u5efa\u7b51\u7ef4\u62a4",
    "Flooring & Roofing": "\u5730\u9762\u4e0e\u5c4b\u9762\u5de5\u7a0b",
    "Our Contact": "\u8054\u7cfb\u65b9\u5f0f",
    "3770 Hidden Meadow Drive Venturia, ND 58489": "\u5317\u8fbe\u79d1\u4ed6\u5dde Venturia Hidden Meadow Drive 3770 \u53f7",
    ". All Rights By": "\u3002\u7248\u6743\u6240\u6709\uff1a",
    "All Rights By": "\u7248\u6743\u6240\u6709\uff1a",
    "Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.": "\u6211\u4eec\u63d0\u4f9b\u4e13\u4e1a\u3001\u53ef\u9760\u3001\u9ad8\u6548\u7684\u5efa\u7b51\u4e0e\u5de5\u7a0b\u670d\u52a1\uff0c\u4ece\u54a8\u8be2\u5230\u4ea4\u4ed8\u5168\u7a0b\u4fdd\u969c\u9879\u76ee\u8d28\u91cf\u3002",
    "BACK TO HOME": "\u8fd4\u56de\u9996\u9875",
    "Error 404": "404 \u9519\u8bef",
    "... Looks like You got lost..!!": "\u9875\u9762\u4f3c\u4e4e\u4e0d\u5b58\u5728\uff0c\u8bf7\u8fd4\u56de\u9996\u9875\u7ee7\u7eed\u6d4f\u89c8\u3002",
    "Get in Touch": "\u8054\u7cfb\u6211\u4eec",
    "Ask Question": "\u54a8\u8be2\u95ee\u9898",
    "Name": "\u59d3\u540d",
    "Your Name": "\u60a8\u7684\u59d3\u540d",
    "Your Email": "\u60a8\u7684\u90ae\u7bb1",
    "Your Email Address": "\u60a8\u7684\u90ae\u7bb1\u5730\u5740",
    "Email Address": "\u90ae\u7bb1\u5730\u5740",
    "Email address": "\u90ae\u7bb1\u5730\u5740",
    "Phone Number*": "\u7535\u8bdd\u53f7\u7801*",
    "Full Name*": "\u59d3\u540d*",
    "Message Here*": "\u8bf7\u8f93\u5165\u7559\u8a00*",
    "Type your message": "\u8bf7\u8f93\u5165\u7559\u8a00",
    "SEND MESSAGE": "\u53d1\u9001\u7559\u8a00",
    "Close": "\u5173\u95ed",
    "Previous slide": "\u4e0a\u4e00\u5f20",
    "Next slide": "\u4e0b\u4e00\u5f20",
    "START NOW": "\u7acb\u5373\u5f00\u59cb",
    "GET STARTED": "\u5f00\u59cb\u54a8\u8be2",
    "DISCOVER MORE": "\u4e86\u89e3\u66f4\u591a",
    "Explore More": "\u63a2\u7d22\u66f4\u591a",
    "ABOUT MORE": "\u4e86\u89e3\u66f4\u591a",
    "PLAY": "\u64ad\u653e",
    "Close": "\u5173\u95ed",
    "Add a Review": "\u6dfb\u52a0\u8bc4\u4ef7",
    "Additional information": "\u9644\u52a0\u4fe1\u606f",
    "Description": "\u8be6\u7ec6\u63cf\u8ff0",
    "In stock": "\u6709\u5e93\u5b58",
    "Categories": "\u5206\u7c7b",
    "Colors": "\u989c\u8272",
    "Dimensions": "\u5c3a\u5bf8",
    "Country:": "\u56fd\u5bb6\uff1a",
    "Clients:": "\u5ba2\u6237\uff1a",
    "Case Studies": "\u6848\u4f8b\u7814\u7a76",
    "Gallery": "\u56fe\u7247\u5c55\u793a",
    "Company": "\u516c\u53f8",
    "Completed Projects": "\u5df2\u5b8c\u6210\u9879\u76ee",
    "Client satisfaction": "\u5ba2\u6237\u6ee1\u610f\u5ea6",
    "Gained experience": "\u7d2f\u79ef\u7ecf\u9a8c",
    "Achieved career growth within their sector industry.": "\u5728\u6240\u5c5e\u884c\u4e1a\u4e2d\u5b9e\u73b0\u6301\u7eed\u6210\u957f\u3002"
  };

  Object.assign(translations, {
    "Enterprise Vision": "\u4f01\u4e1a\u613f\u666f",
    "Global Building Materials Innovation Benchmark": "\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u521b\u65b0\u6807\u6746\u4e0e\u4ea7\u4e1a\u5f15\u9886\u8005",
    "Technology Leader And Industry Pioneer": "\u6280\u672f\u521b\u65b0\u6807\u6746\u4e0e\u4ea7\u4e1a\u5f15\u9886\u8005",
    "Driven by research and validated through industry application": "\u4ee5\u79d1\u7814\u5b9e\u529b\u4e3a\u652f\u6491 \u4ee5\u4ea7\u4e1a\u5e94\u7528\u4e3a\u9a8c\u8bc1",
    "Global Benchmark in Building Materials": "\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u521b\u65b0\u6807\u6746\u4e0e\u4ea7\u4e1a\u5f15\u9886\u8005",
    "Technology innovation and industry leadership": "\u6280\u672f\u521b\u65b0\u4e0e\u4ea7\u4e1a\u5f15\u9886",
    "Global Building Materials": "\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u6750\u6599\u9886\u57df\u7684",
    "Innovation Benchmark": "\u6280\u672f\u521b\u65b0\u6807\u6746",
    "Global Building Materials Innovation Benchmark": "\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u521b\u65b0\u6807\u6746\u4e0e\u4ea7\u4e1a\u5f15\u9886\u8005",
    "Technology leader and industry pioneer": "\u4ea7\u4e1a\u5f15\u9886\u8005",
    "Enterprise Mission": "\u4f01\u4e1a\u4f7f\u547d",
    "Stronger Buildings Sustainable World": "\u8ba9\u5efa\u7b51\u66f4\u575a\u56fa \u8ba9\u4e16\u754c\u66f4\u53ef\u6301\u7eed",
    "Building With Strength And Sustainability": "\u8ba9\u5efa\u7b51\u66f4\u575a\u56fa\u8ba9\u4e16\u754c\u66f4\u53ef\u6301\u7eed",
    "Delivering reliable materials for safer and longer lasting structures": "\u63d0\u4f9b\u53ef\u9760\u6750\u6599 \u5b88\u62a4\u66f4\u5b89\u5168\u66f4\u957f\u4e45\u7684\u5efa\u7b51\u7ed3\u6784",
    "Stronger Buildings, Sustainable Future": "\u8ba9\u5efa\u7b51\u66f4\u575a\u56fa\uff0c\u8ba9\u4e16\u754c\u66f4\u53ef\u6301\u7eed",
    "Making construction more durable and responsible": "\u63a8\u52a8\u66f4\u575a\u56fa\u3001\u66f4\u53ef\u6301\u7eed\u7684\u5efa\u7b51\u53d1\u5c55",
    "Stronger Buildings": "\u8ba9\u5efa\u7b51\u66f4\u575a\u56fa",
    "More Sustainable World": "\u8ba9\u4e16\u754c\u66f4\u53ef\u6301\u7eed",
    "Stronger Buildings More Sustainable World": "\u8ba9\u5efa\u7b51\u66f4\u575a\u56fa\uff0c\u8ba9\u4e16\u754c\u66f4\u53ef\u6301\u7eed",
    "Advancing durable and responsible construction": "\u63a8\u52a8\u575a\u56fa\u3001\u53ef\u6301\u7eed\u7684\u5efa\u7b51\u53d1\u5c55",
    "Core Values": "\u4f01\u4e1a\u4ef7\u503c\u89c2",
    "Innovation Driven Technology For Good Customer Success": "\u521b\u65b0\u9a71\u52a8 \u79d1\u6280\u5411\u5584 \u5ba2\u6237\u5171\u8d62",
    "Innovation Driven Technology For Good Customer Success Responsibility As Foundation": "\u521b\u65b0\u9a71\u52a8 \u79d1\u6280\u5411\u5584 \u5ba2\u6237\u5171\u8d62 \u8d23\u4efb\u7b51\u57fa",
    "Responsibility As Foundation": "\u8d23\u4efb\u7b51\u57fa",
    "Creating long term value through responsible technology and trusted collaboration": "\u4ee5\u8d23\u4efb\u79d1\u6280\u4e0e\u53ef\u4fe1\u534f\u4f5c\u521b\u9020\u957f\u671f\u4ef7\u503c",
    "Innovation for Good, Shared Success": "\u521b\u65b0\u9a71\u52a8\u3001\u79d1\u6280\u5411\u5584\u3001\u5ba2\u6237\u5171\u8d62",
    "Responsibility as the foundation": "\u8d23\u4efb\u7b51\u57fa",
    "Innovation Driven": "\u521b\u65b0\u9a71\u52a8",
    "Responsibility Built": "\u8d23\u4efb\u7b51\u57fa",
    "Innovation Driven Responsibility Built": "\u521b\u65b0\u9a71\u52a8\u3001\u8d23\u4efb\u7b51\u57fa",
    "Technology for good, customer win-win": "\u79d1\u6280\u5411\u5584\u3001\u5ba2\u6237\u5171\u8d62",
    "Rooted in materials science and engineering, ZHONGDA HENGJIAN (BEIJING) NEW MATERIAL TECHNOLOGY CO., LTD follows a high-tech innovation path and builds an integrated innovation system across R and D, production, and application. Focused on technological breakthroughs and industrial transformation in advanced building materials, the company takes its dual-wheel strategy of new material R and D plus new technology commercialization as core competitiveness, and is committed to becoming a global science and technology innovation benchmark in advanced building materials.": "\u4e2d\u5927\u6052\u5efa\uff08\u5317\u4eac\uff09\u65b0\u6750\u6599\u79d1\u6280\u6709\u9650\u516c\u53f8\u4ee5\u6750\u6599\u79d1\u5b66\u4e0e\u5de5\u7a0b\u5b66\u4e3a\u6839\u57fa\uff0c\u575a\u6301\u8d70\u9ad8\u79d1\u6280\u521b\u65b0\u8def\u7ebf\uff0c\u6784\u5efa\u7814\u53d1\u3001\u751f\u4ea7\u3001\u5e94\u7528\u5168\u4ea7\u4e1a\u94fe\u521b\u65b0\u4f53\u7cfb\uff0c\u805a\u7126\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u7a81\u7834\u4e0e\u4ea7\u4e1a\u9769\u65b0\u3002\u4ee5\u300c\u53cc\u8f6e\u9a71\u52a8\u300d\u6218\u7565\uff08\u65b0\u6750\u6599\u7814\u53d1+\u65b0\u6280\u672f\u8f6c\u5316\uff09\u4e3a\u6838\u5fc3\u7ade\u4e89\u529b\uff0c\u81f4\u529b\u4e8e\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u79d1\u521b\u6807\u6746\u3002",
    "Rooted in materials science and engineering ZHONGDA HENGJIAN BEIJING NEW MATERIAL TECHNOLOGY CO LTD follows a high tech innovation path and builds an integrated system across research production and application Focused on breakthroughs and industrial transformation in advanced building materials the company drives growth through new material research and new technology commercialization and aims to become a global innovation benchmark in advanced building materials": "\u4e2d\u5927\u6052\u5efa\u5317\u4eac\u65b0\u6750\u6599\u79d1\u6280\u6709\u9650\u516c\u53f8\u4ee5\u6750\u6599\u79d1\u5b66\u4e0e\u5de5\u7a0b\u5b66\u4e3a\u6839\u57fa\u575a\u6301\u8d70\u9ad8\u79d1\u6280\u521b\u65b0\u8def\u7ebf\u6784\u5efa\u7814\u53d1\u751f\u4ea7\u5e94\u7528\u5168\u4ea7\u4e1a\u94fe\u521b\u65b0\u4f53\u7cfb\u805a\u7126\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u7a81\u7834\u4e0e\u4ea7\u4e1a\u9769\u65b0\u4ee5\u53cc\u8f6e\u9a71\u52a8\u6218\u7565\u65b0\u6750\u6599\u7814\u53d1\u52a0\u65b0\u6280\u672f\u8f6c\u5316\u4e3a\u6838\u5fc3\u7ade\u4e89\u529b\u81f4\u529b\u4e8e\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u79d1\u521b\u6807\u6746",
    "Rooted in materials science and engineering, ZHONGDA HENGJIAN (BEIJING) NEW MATERIAL TECHNOLOGY CO., LTD pursues high-tech innovation and builds an integrated system across research, production, and application. Focused on breakthroughs and industrial transformation in advanced building materials, the company drives growth through new material R and D and new technology commercialization, aiming to become a global innovation benchmark in the field.": "\u4e2d\u5927\u6052\u5efa\uff08\u5317\u4eac\uff09\u65b0\u6750\u6599\u79d1\u6280\u6709\u9650\u516c\u53f8\u4ee5\u6750\u6599\u79d1\u5b66\u4e0e\u5de5\u7a0b\u5b66\u4e3a\u6839\u57fa\uff0c\u575a\u6301\u8d70\u9ad8\u79d1\u6280\u521b\u65b0\u8def\u7ebf\uff0c\u6784\u5efa\u7814\u53d1\u3001\u751f\u4ea7\u3001\u5e94\u7528\u5168\u4ea7\u4e1a\u94fe\u521b\u65b0\u4f53\u7cfb\uff0c\u805a\u7126\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u7684\u6280\u672f\u7a81\u7834\u4e0e\u4ea7\u4e1a\u9769\u65b0\u3002\u4ee5\u300c\u53cc\u8f6e\u9a71\u52a8\u300d\u6218\u7565\uff08\u65b0\u6750\u6599\u7814\u53d1+\u65b0\u6280\u672f\u8f6c\u5316\uff09\u4e3a\u6838\u5fc3\u7ade\u4e89\u529b\uff0c\u81f4\u529b\u4e8e\u6210\u4e3a\u5168\u7403\u5efa\u7b51\u65b0\u6750\u6599\u9886\u57df\u79d1\u521b\u6807\u6746\u3002",
    "Focused on the special building materials industry the company starts from research and production and operates across the full value chain It implements strategies in scientific research innovation technical support digitalization and brand marketing while building an efficient and smooth organizational operation and management system With product quality as the foundation and high quality service as the purpose the company strives to become a leading brand in the special building materials industry": "聚焦特种建筑材料产业，以研发生产为起点，全价值链经营。实施科研创新、技术支持、信息化与品牌营销战略，建立高效顺畅的组织运营与管控体系。坚持以产品质量为基础，以优质服务为宗旨，争做特种建筑材料行业领导品牌。",
    "SHOP LIST": "产品列表",
    "Shop List": "产品列表",
    "SHOP DETAILS": "产品详情",
    "Reviews (03)": "评价（03）",
    "Your Message": "您的留言",
    "post comments": "提交评论",
    "Safe & Secure Checkout": "安全可靠结算",
    "Weight": "重量",
    "240 Ton": "240 吨",
    "20 脳 30 脳 40 cm": "20 x 30 x 40 厘米",
    "Black, Blue, Green": "黑色、蓝色、绿色",
    "Model wears:": "模特尺码：",
    "UK 10/ EU 38/ US 6": "UK 10 / EU 38 / US 6",
    "Occasion:": "适用场景：",
    "Lifestyle, Sport": "日常、运动",
    "Italy": "意大利",
    "Martin Luthar": "马丁·路德",
    "Jenifer Nisha": "詹妮弗·妮莎",
    "James Roy": "詹姆斯·罗伊",
    "Sea Blue Metallic": "海蓝金属色",
    "Close of hand tool": "近景手动工具",
    "Accessories,Bikes": "配件、自行车",
    "Blue Plastic Pipes": "蓝色塑料管",
    "Sort by : Default": "排序：默认",
    "Sort by popularity": "按热度排序",
    "Sort by latest": "按最新排序",
    "Filter": "筛选",
    "Filter: All": "筛选：全部",
    "High-performance grouting": "高性能灌浆产品",
    "Characteristic concrete": "特性混凝土产品",
    "High-performance polymer mortar": "高性能聚合物砂浆产品",
    "Epoxy resin Accessories": "环氧树脂&配套产品",
    "Concrete admixture": "混凝土外加剂产品",
    "Multi-functional coatings accessories": "多功能涂料&配套产品",
    "Price Filter": "价格筛选",
    "Product Status": "产品状态",
    "On sale": "促销中",
    "Builing Construction": "建筑施工",
    "Building Interior Renovation": "建筑室内翻新",
    "Hardwood Flooring": "硬木地板",
    "Roof Repairing": "屋面维修",
    "Architecture Consulting": "建筑咨询",
    "Retail banks wake up digital lending": "零售银行加速数字化贷款",
    "Get home loan": "申请住房贷款",
    "Speed Bench Drill Press": "高速台式钻床",
    "Brake Conversion Kit": "制动转换套件",
    "Wheel Bearing Retainer": "车轮轴承固定件",
    "Backpack, Wonder": "背包产品",
    "Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.": "该产品结构可靠、使用便捷，适用于多种施工与维护场景，能够在复杂环境下保持稳定表现。",
    "Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.": "该产品结构可靠、使用便捷，适用于多种施工与维护场景。",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the art market.": "我们提供清晰完整的产品信息，帮助客户了解产品规格、适用场景、性能特点和使用价值，从而做出更准确的选择。产品品质、工艺稳定性、供应能力和实际应用需求都会影响采购决策。",
    "When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the art market.painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the art market.": "在选择产品时，建议重点关注产品参数、材质、适用范围、交付能力和售后支持。完整的产品说明有助于客户快速判断产品是否符合项目需求。",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.": "产品体验稳定，结构设计合理，适合长期使用和多种项目场景。",

    "Welcome to ZHONGDA HENGJIAN (BEIJING) NEW MATERIAL TECHNOLOGY CO., LTD": "欢迎来到中大恒建（北京）新材料科技有限公司",
    "interior": "室内设计",
    "projects complete": "已完成项目",
    "Years of experience": "多年行业经验",
    "Client satisfaction": "客户满意度",
    "B E S T S O L U T I O N S": "优质解决方案",
    "ARCHITECTURAL SOLUTIONS": "建筑解决方案",
    "Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla est libero sed tempus urna feugiat eu. Curabitur eu feugiat ligu Suspendisse.": "我们以专业设计、稳定交付和清晰流程，为客户提供覆盖咨询、设计、施工与维护的综合解决方案。",
    "Conceptual Design": "概念设计",
    "Schematic Design": "方案设计",
    "Interior Design": "室内设计",
    "Sustainable Design": "可持续设计",
    "Urban Planning": "城市规划",
    "A B O U T U S": "关于我们",
    "WE ARE PROVIDED WITH AN AMAZING CYCLING SERVICE": "我们提供专业高效的综合服务",
    "We are committed to redefining the construction industry with innovative solutions, cutting-edge technology, and sustainable practices. Our team of experts ensures every project is crafted": "我们致力于通过创新方案、先进技术和可持续实践提升工程与材料服务水平，专业团队确保每个项目都得到认真推进。",
    "Innovation Eco power Technologies": "创新环保技术",
    "Regularly Maintaining and organizing your Tools": "定期维护并规范管理工具",
    "Regularly organizing and Maintaining your Tools": "定期整理并维护工具",
    "OUR TEAM MUMBER": "团队成员",
    "OUR TEAM MEMBER": "团队成员",
    "Leslie Alexander": "莱斯利·亚历山大",
    "Cheif Financial officer": "首席财务官",
    "Sohel Tanvir": "索赫尔·坦维尔",
    "Alex Carry": "亚历克斯·凯瑞",
    "Our Testimonial": "客户评价",
    "REAL STORIES FROM CONSTRUCTION": "来自项目现场的真实反馈",
    "\"World class Construction solutions to customers stakeholders across a broad range of construction industry sectors. mindful of our responsibilities as architects. Through work.\"": "我们为建筑行业客户和合作伙伴提供专业解决方案，并始终重视质量、责任与长期价值。",
    "Jackson Hobber": "杰克逊·霍伯",
    "CEO,AB Tech": "AB Tech 首席执行官",
    "C H CE C K I T O U T": "查看产品",
    "NEW ARRIVALS": "新品上市",
    "Running Sniker": "运动鞋",
    "Safety Helmet": "安全头盔",
    "Adjustable Wrench Tool": "可调扳手",
    "C O M P L E T E D P R O J E C T S": "已完成项目",
    "BEHIND THE SCENES": "项目幕后",
    "Roofing": "屋面工程",
    "Building Landmarks that Inspire Generations": "打造启发未来的地标建筑",
    "Manufacturing": "制造业",
    "Designing Spaces that Shape the Future": "设计塑造未来的空间",
    "Commercial": "商业项目",
    "Architectural Excellence Beyond Boundaries": "超越边界的建筑品质",
    "O U R N E W S": "新闻资讯",
    "RRAD OUR ARTICLES AND NEWS": "阅读我们的文章与新闻",
    "A Guide to Hassle-Free Cross-Border Shipping": "跨境运输无忧指南",
    "Sustainable Construction Meets Innovative Crafting.": "可持续施工与创新工艺结合",
    "B U I L D I N G Y O U R V I S I O N": "构建您的愿景",
    "LET'S BUILD DREAM SOMETHING AMAZING": "一起打造令人期待的项目",
    "START A PROJECT": "启动项目",
    "CONTACT WITH US": "联系我们",
    "OUR FOOTER": "页脚信息",
    "Get in Touch": "联系我们",
    "3891 Ranchview Dr. Richardson, California 62639": "加利福尼亚州理查森 Ranchview Dr. 3891 号",
    "Mon - Sat: 7am to 4.30pm": "周一至周六：7:00 - 16:30",
    "Sunday: Holiday": "周日：休息",
    "Subscribe Newsletter": "订阅资讯",
    "SUBSCRIBE NOW": "立即订阅",
    "Registered?": "已注册？",
    "684 West College St. Sun City, USA": "美国太阳城 West College St. 684 号",
    "Emargency? Call us": "紧急情况？请致电我们",

    "High-quality roofing services trusted by professionals": "值得专业人士信赖的高品质屋面服务",
    "our projects": "我们的项目",
    "WHO WE ARE": "我们是谁",
    "WE ARE COMMITTED TO PROVIDEQUALITY ROOFING": "我们致力于提供高品质屋面工程",
    "From repairs to full roof replacements, we treat each home as our own, providing personalized solutions tailored to meet the unique needs of our clients. Trust us to protect what matters": "从局部维修到整体更换，我们像对待自己的项目一样对待每个客户需求，提供个性化解决方案，守护真正重要的空间。",
    "Roofing Professionals You Can Trust": "值得信赖的屋面专业团队",
    "Building Strong Roofs, Building Stronger Relationships": "打造坚固屋面，也建立长期信任",
    "Commitment to Quality, Excellence in Service": "坚持质量，追求卓越服务",
    "Protecting Your Home with Expertise and Excellence": "以专业能力守护您的建筑",
    "ZHONGDA HENGJIAN BEIJING NEW MATERIAL TECHNOLOGY CO LTD": "中大恒建（北京）新材料科技有限公司",
    "Rooted in materials science and engineering the company follows a high tech innovation path and builds an integrated innovation system across research production and application Focused on technological breakthroughs and industrial transformation in advanced building materials the company takes new material research and new technology commercialization as its dual driven core competitiveness and is committed to becoming a global science and technology innovation benchmark in advanced building materials": "以材料科学与工程学为根基，坚持走高科技创新路线，构建研发、生产、应用全产业链创新体系，聚焦建筑新材料领域的技术突破与产业革新。以「双轮驱动」战略（新材料研发+新技术转化）为核心竞争力，致力于成为全球建筑新材料领域科创标杆。",
    "15 Production Bases": "15个生产基地",
    "100 Applied Technologies": "100项应用技术",
    "5 Million Tons Annual Production Capacity": "500万吨/年年生产能力",
    "More Than 30 Provincial And Ministerial Honors": "荣获各类省部级以上30多项荣誉称号",
    "O U R S E R V I C E S": "我们的服务",
    "PROTECT YOUR HOME WITH": "?????????",
    "OUR ROOFING SERVICES": "???????",
    "PROTECT YOUR HOME WITH OUR ROOFING SERVICES": "用专业屋面服务守护建筑安全",
    "Six Core Products": "六大核心产品",
    "High-performance grouting": "高性能灌浆产品",
    "Characteristic concrete": "特性混凝土产品",
    "High-performance polymer mortar": "高性能聚合物砂浆产品",
    "Epoxy resin & Accessories": "环氧树脂&配套产品",
    "Concrete admixture": "混凝土外加剂产品",
    "Multi-functional coatings & accessories": "多功能涂料&配套产品",
    "High performance grouting material based on polymer modification technology with high flowability high strength micro expansion low shrinkage and early strength It is widely used in equipment foundation grouting rail transit anchoring structural reinforcement and post tensioned duct grouting.": "采用聚合物改性技术的高性能灌浆材料，具有高流动度、高强度、微膨胀、低收缩及早强特点。广泛用于设备基础灌浆、轨道交通锚固、结构加固及后张预应力孔道灌浆等领域。",
    "High performance specialty concrete developed for special engineering needs including high strength self compacting shrinkage compensating and corrosion resistant series It provides excellent durability impermeability and crack resistance for nuclear power airport runways high speed rail marine engineering and other high end fields.": "针对特殊工程需求研发的高性能特种混凝土，包括高强、自密实、补偿收缩及耐腐蚀系列。具有优异耐久性、抗渗性和抗裂性能，适用于核电、机场跑道、高铁及海洋工程等高端领域。",
    "High performance repair mortar modified with polymers featuring high bond strength good crack resistance weather resistance and excellent impact resistance It is suitable for rapid repair of damaged concrete structures thin layer restoration and surface protection works.": "以高分子聚合物改性的高性能修补砂浆，粘结强度高、抗裂性好、耐候及抗冲击性能优异。适用于混凝土结构破损快速修补、薄层修复及表面防护工程。",
    "High strength epoxy grouts adhesives and matching curing agent series with strong bonding force chemical corrosion resistance and outstanding mechanical performance Widely used for concrete crack injection steel plate bonding reinforcement carbon fiber reinforcement and anti corrosion flooring.": "高强度环氧灌浆料、粘结剂及配套固化剂系列产品。具有极强粘结力、耐化学腐蚀和机械性能突出，广泛用于混凝土裂缝灌注、钢板粘贴加固、碳纤维加固及防腐地坪等领域。",
    "A series of high performance water reducers expansion agents accelerators waterproofing agents and related products that significantly improve concrete workability mechanical properties and durability meeting the varied needs of municipal road water conservancy building and other projects.": "包含高性能减水剂、膨胀剂、速凝剂、防水剂等系列产品。能显著改善混凝土的工作性、力学性能和耐久性，满足市政、公路、水利及建筑等工程的不同需求。",
    "High performance waterproof coatings anti corrosion coatings and concrete protective coating series with excellent waterproof breathability anti carbonation chemical resistance and weather resistance They effectively extend the service life of concrete structures and are suitable for bridge tunnel and industrial building protection.": "高性能防水涂料、防腐涂料及混凝土防护涂料系列。具备优异的防水透气、抗碳化、耐化学侵蚀及耐候性能，可有效延长混凝土结构的使用寿命，适用于桥梁、隧道及工业建筑防护。",
    "High performance grouting material based on polymer modification technology with high flowability high strength micro expansion low shrinkage and early strength.": "采用聚合物改性技术的高性能灌浆材料，具有高流动度、高强度、微膨胀、低收缩及早强特点。",
    "High performance specialty concrete developed for special engineering needs with excellent durability impermeability and crack resistance.": "针对特殊工程需求研发的高性能特种混凝土，具有优异耐久性、抗渗性和抗裂性能。",
    "High performance polymer modified repair mortar for damaged concrete structures thin layer restoration and surface protection works.": "以高分子聚合物改性的高性能修补砂浆，适用于混凝土结构破损快速修补、薄层修复及表面防护工程。",
    "High strength epoxy grouts adhesives and matching curing agent series for structural reinforcement and anti corrosion flooring.": "高强度环氧灌浆料、粘结剂及配套固化剂系列产品，适用于结构加固及防腐地坪等领域。",
    "High performance concrete admixtures that improve workability mechanical properties and durability for concrete projects.": "高性能混凝土外加剂，可改善混凝土的工作性、力学性能和耐久性。",
    "High performance waterproof anti corrosion and concrete protective coating series for bridge tunnel and industrial building protection.": "高性能防水、防腐及混凝土防护涂料系列，适用于桥梁、隧道及工业建筑防护。",
    "Leak Detection & Repairs": "漏点检测与维修",
    "Flat Roofing Systems": "平屋面系统",
    "Roof Repair Solutions": "屋面维修方案",
    "Commercial Roofing Solutions": "商业屋面解决方案",
    "Emergency Leak Repair": "紧急漏水维修",
    "Residential Roof Installation": "住宅屋面安装",
    "O U R P R O J E C T": "我们的项目",
    "BUILDING LANDMARKS THAT INSPIRE": "十六大工程",
    "HIGHWAY ENGINEERING": "公路工程",
    "BRIDGE ENGINEERING": "桥梁工程",
    "TUNNEL ENGINEERING": "隧道工程",
    "ROAD WORKS": "场道工程",
    "WIND ENERGY ENGINEERING": "风能工程",
    "NUCLEAR POWER ENGINEERING": "核电工程",
    "PORT ENGINEERING": "港口工程",
    "WATER CONSERVANCY PROJECT": "水利工程",
    "PETROCHEMICAL ENGINEERING": "石化工程",
    "MARINE ENGINEERING": "海洋工程",
    "CIVIL CONSTRUCTION PROJECTS": "民建工程",
    "MILITARY ENGINEERING": "军工工程",
    "TRACK ENGINEERING": "轨道工程",
    "REINFORCEMENT PROJECT": "加固工程",
    "FLOOR PROJECT": "地坪工程",
    "MUNICIPAL ENGINEERING": "市政工程",
    "all projects": "全部项目",
    "Snecars Venture Capital app": "Snecars 风投应用",
    "development - 2024": "开发 - 2024",
    "PRICING PLAN": "资质荣誉",
    "NEW MEMBERSHIPS ARE 40% OFF!": "以资质认证 技术成果与荣誉体系支撑高质量发展",
    "Qualifications And Honors": "资质荣誉",
    "Recognized capabilities supported by qualifications patents and honors": "以资质认证 技术成果与荣誉体系支撑高质量发展",
    "RESIDENTIAL": "企业资质",
    "Enterprise Qualifications": "企业资质",
    "A complete qualification system supports standardized operations and reliable project delivery": "完善的资质体系支撑规范化运营与可靠的工程交付",
    "Production Bases": "生产基地",
    "WooCommerce WordPress theme designed to empower cycling shops": "面向门店展示与销售的电商主题方案",
    "/Month": "/月",
    "Maintenance of fences": "标准化生产与质量管控体系",
    "Gate maintenance": "多基地供应与服务能力",
    "Checking electrical wiring": "资质驱动的合规运营",
    "Maintenance of barriers": "稳定支撑重点工程场景",
    "Standardized production and quality control system": "标准化生产与质量管控体系",
    "Multi base supply and service capability": "多基地供应与服务能力",
    "Qualification driven compliant operations": "资质驱动的合规运营",
    "Stable support for key engineering scenarios": "稳定支撑重点工程场景",
    "COMMERCIAL": "技术成果",
    "Technical Achievements": "技术成果",
    "Continuous research and engineering application build a practical technology portfolio": "持续研发与工程应用构建面向实践的技术成果体系",
    "Applied Technologies": "项应用技术",
    "Core Strength": "核心实力",
    "Technology development focused on special building materials": "聚焦特种建筑材料技术研发",
    "Application oriented product innovation": "面向应用场景的产品创新",
    "Technical support throughout project delivery": "贯穿工程交付的技术支持",
    "R and D transformation with engineering verification": "研发转化与工程验证并重",
    "POPULAR": "热门",
    "INDUSTRIAL": "荣誉奖项",
    "Honorary Awards": "荣誉奖项",
    "Industry recognition reflects long term commitment to quality innovation and responsibility": "行业认可见证企业对质量 创新与责任的长期坚持",
    "Provincial And Ministerial Honors": "项省部级以上荣誉",
    "Recognition from provincial and ministerial level authorities": "获得省部级以上荣誉认可",
    "Quality oriented brand development": "以质量为基础的品牌建设",
    "Responsible technology and sustainable development": "责任科技与可持续发展",
    "Trusted by engineering partners and industry clients": "获工程伙伴与行业客户信赖",
    "TESTIMONIALS": "客户评价",
    "WHAT OUR RACERS SAY": "客户怎么说",
    "\"We needed emergency repairs after a storm, and they came through was fast, professional, and the quality of work was outstanding.\"": "暴风雨后我们需要紧急维修，他们响应迅速、非常专业，交付质量也很出色。",
    "Product Manager": "产品经理",
    "MERCHANDISE & SHOP": "产品与商城",
    "OFFICIAL RACING MERCH SHOP NOW": "官方产品立即选购",
    "Corrugated Iron": "波纹铁板",
    "houses Metal tile": "金属瓦",
    "Green metal sheet": "绿色金属板",
    "LATEST NEW & ARTICLE": "最新新闻与文章",
    "The Benefits of Upgrading to an Energy-Efficient Roof": "升级节能屋面的优势",
    "Signs Your Roof Need Repair Don't Wait Until It's Too Late": "屋面需要维修的信号",
    "Regular Roof Inspections Save Your Money": "定期屋面检查可节省成本",
    "Professional Roof Care That Saves You Money": "专业屋面维护帮助降低支出",
    "Niagara Falls, Jasper National Park, Banff National Park,": "尼亚加拉瀑布、贾斯珀国家公园、班夫国家公园",
    "Shield & Shine Roofing": "Shield & Shine 屋面",
    "Home Guard Roofing": "Home Guard 屋面",
    "Peak Protection": "Peak Protection",
    "Our Service": "我们的服务",
    "Latest News": "最新新闻",
    "Terms & Conditions": "条款与条件",
    "Privacy Policy": "隐私政策",
    "Full-Face Helmets": "全盔",
    "Premium Solar Panels": "高端太阳能板",

    "Solarp - Energy HTML Template": "Solarp - 能源网站模板",
    "Take control of your energy future with the power of the sun. Our solar solutions provide clean, reliable, and cost-effective energy for your home or business.": "借助太阳能掌控您的能源未来。我们的太阳能方案为家庭和企业提供清洁、可靠且具有成本优势的能源。",
    "Power Your Life with the Energy of the Sun": "用太阳能点亮生活",
    "Building a Greener World with Solar Power": "用太阳能建设更绿色的世界",
    "Empowering a Greener Future": "赋能绿色未来",
    "We specialize in creating customized solar solutions that empower homeowners and businesses to embrace clean, sustainable energy.": "我们专注于定制化太阳能解决方案，帮助家庭和企业使用清洁、可持续能源。",
    "company info,": "公司信息",
    "We deliver high-performance solar systems for homes and businesses.": "我们为家庭和企业交付高性能太阳能系统。",
    "years of experience": "多年经验",
    "START WITH A STRATEGY": "?????",
    "AND FINISH WITH SUCCESS": "???????",
    "START WITH A STRATEGY AND FINISH WITH SUCCESS": "以策略开始，以成功交付结束",
    "Residential Solar Installation": "住宅太阳能安装",
    "Commercial Solar Solutions": "商业太阳能方案",
    "Solar Panel Maintenance": "太阳能板维护",
    "Learn More": "了解更多",
    "LATEST PROJECT": "最新项目",
    "OUR LATEST PROJECT": "最新项目",
    "Solar Energy": "太阳能",
    "Solar Energy system": "太阳能系统",
    "OUR EXPERT EQUESTRIAN TEAM": "我们的专业团队",
    "Mike Hardson": "迈克·哈德森",
    "Jessica Brown": "杰西卡·布朗",
    "David Cooper": "大卫·库珀",
    "MEMBER REVIEWS": "成员评价",
    "WHAT OUR RIDERS SAY": "客户评价",
    "ASK QUESTION": "咨询问题",
    "You can expect to save 30-40% on your electricity bill. Adding battery storage can increase savings further.": "通常可节省 30%-40% 的电费，增加储能系统后还可进一步提升节省效果。",
    "How does a solar panel system work?": "太阳能板系统如何工作？",
    "Solar panels convert sunlight into electricity. The inverter then converts DC power into AC power, which can be used for your home or business.": "太阳能板将阳光转化为电能，逆变器再将直流电转换为家庭或企业可使用的交流电。",
    "Do solar panels work during rainy or cloudy days?": "雨天或阴天太阳能板能工作吗？",
    "How long do solar panels last?": "太阳能板可以使用多久？",
    "How much roof space is required for installation?": "安装需要多少屋顶空间？",
    "LATEST BLOG": "最新博客",
    "OUR LATEST NEWS & BLOG": "最新新闻与博客",
    "How Solar Panels Can Help You Save Big in 2025": "太阳能板如何帮助您在 2025 年节省开支",
    "Advancements Breakthroughs in Renewable Power": "可再生能源技术突破",
    "Government Subsidies Explained - How to Claim Solar Incentives": "政府补贴说明：如何申请太阳能激励政策",
    "We made passion our raw material": "我们以热情作为原动力",
    "Call us now": "立即致电",
    "Modern & tech-driven": "现代化与技术驱动",

    "Empowering Industries with Smart Manufacturing Solutions": "用智能制造方案赋能产业",
    "We combine innovation, technology, and expertise to deliver customized manufacturing solutions that enhance productivity, reduce costs, and drive long-term growth across diverse industries.": "我们结合创新、技术与专业能力，提供定制化制造方案，帮助提升效率、降低成本并推动长期增长。",
    "Corporate feel": "企业风格",
    "Industrial Growth Through Innovation and Technology": "以创新和技术推动工业增长",
    "rom concept to completion, we deliver cutting-edge manufacturing solutions that transform efficiency, sustainability, and performance for every industry we serve.": "从概念到交付，我们提供前沿制造方案，提升各行业的效率、可持续性和整体表现。",
    "BOOKING NOW": "立即预约",
    "Corporate tone": "企业表达",
    "Building Smarter, Stronger, and More Sustainable Industries": "建设更智能、更强大、更可持续的产业",
    "Experience next-generation industrial solutions engineered to streamline production, boost innovation, and empower your business to thrive in a competitive world.": "体验面向未来的工业解决方案，优化生产、促进创新，并帮助企业在竞争环境中持续成长。",
    "Industry overview, mission statement, or brand vision.": "行业概览、使命陈述或品牌愿景。",
    "Induyst a full-service manufacturing company with 15 years of experience serving industries such as automotive.": "我们是一家拥有 15 年经验的综合制造服务公司，服务汽车等多个行业。",
    "We are certified companye": "我们是认证企业",
    "We are bring quality services": "我们提供高质量服务",
    "Watch the Video": "观看视频",
    "WHAT WE OFFER": "我们提供什么",
    "PERSONALIZED MANUFACTURING PLANS": "个性化制造方案",
    "[Our Services]": "我们的服务",
    "Metal": "金属",
    "Chemical": "化工",
    "Automotive": "汽车",
    "Production Process Optimization": "生产流程优化",
    "Mauris congue urna et augue congue, at malesuada leo mattis. Aliquam erat volutpat. Aenean elementum nisl vitae felis sodales, at pulvinar ex varius.": "我们通过流程梳理、工艺优化和资源配置提升生产效率，帮助客户获得更稳定的制造能力。",
    "View Details": "查看详情",
    "Mining": "矿业",
    "Energy": "能源",
    "Workforce Training & Control": "人员培训与管理",
    "Metal Fabrication and Welding Assen": "金属加工与焊接装配",
    "OUR EXPERT INDUSTRY TEAM": "我们的工业专家团队",
    "Carpenter": "木工",
    "Jerome Bell": "杰罗姆·贝尔",
    "Electrician": "电工",
    "Jenny Wilson": "珍妮·威尔逊",
    "DISPLAY COMPLETED PROJECTS VISUALLY": "可视化展示已完成项目",
    "Advanced Manufacturing Plant Setup": "先进制造工厂建设",
    "Sustainable Energy Installation Projects": "可持续能源安装项目",
    "Large-Scale Industrial Infrastructure": "大型工业基础设施",
    "International Yachting": "国际游艇",
    "BEYOND EXCEPTIONAL SINCE 1999": "自 1999 年以来持续超越期待",
    "Freedom is just a booking away. At [Your Boat Club Name], you choose when to set sail, whether it's a quick sunset cruise, a full day of exploration": "只需预约即可开启自由航行。您可以选择短途日落巡航，也可以安排一整天的探索体验。",
    "Service": "服务",
    "Maintenence": "维护",
    "Testimonials": "客户评价",
    "STORIES FROM OUR USERS": "用户故事",
    "Latest Gallery": "最新图集",
    "JOIN OUR COMMUNITY": "加入我们的社区",
    "News & Blog": "新闻与博客",
    "KEY CROSS-INDUSTRY TRENDS & INSIGHTS": "跨行业趋势与洞察",
    "How Automation Is Revolutionizing Industrial Efficiency": "自动化如何革新工业效率",
    "Top 5 Challenges Facing Modern Manufacturers": "现代制造商面临的五大挑战",
    "Sustainable Production: Building a Greener Industry": "可持续生产：建设更绿色的产业",
    "GLOBALLY TRUSTED , LOCALLY LOVED": "全球信赖，本地认可"
  });

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const normalizedTranslations = buildNormalizedTranslations(translations);
  const translatableAttributes = ["placeholder", "value", "aria-label", "title", "alt"];

  function buildNormalizedTranslations(source) {
    const map = Object.create(null);
    Object.keys(source).forEach(function (key) {
      map[normalizeKey(key)] = source[key];
    });
    return map;
  }

  function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function normalizeKey(value) {
    return normalizeText(value)
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201c\u201d]/g, '"')
      .toLowerCase();
  }

  function getTranslation(value) {
    const key = normalizeText(value);
    const showingRange = key.match(/^Showing (\d+)\s*[-\u2013\u2014~]+\s*(\d+) of (\d+) results$/);
    if (showingRange) {
      return "\u663e\u793a " + showingRange[1] + "-" + showingRange[2] + " \u6761\uff0c\u5171 " + showingRange[3] + " \u6761\u7ed3\u679c";
    }

    const showingEmpty = key.match(/^Showing 0 of 0 results$/);
    if (showingEmpty) {
      return "\u663e\u793a 0 \u6761\uff0c\u5171 0 \u6761\u7ed3\u679c";
    }

    return translations[key] || normalizedTranslations[normalizeKey(key)] || "";
  }

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setToggleState(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang-current]").forEach(function (node) {
      node.textContent = lang === "zh" ? "\u4e2d" : "EN";
    });
  }

  function updatePreloaderBrand(lang) {
    const brand = lang === "zh" ? PRELOADER_BRAND_ZH : PRELOADER_BRAND_EN;

    document.querySelectorAll(".txt-loading").forEach(function (container) {
      container.innerHTML = "";

      Array.from(brand).forEach(function (char) {
        const span = document.createElement("span");
        span.className = "letters-loading";
        span.setAttribute("data-text-preloader", char);
        span.textContent = " " + char + " ";
        container.appendChild(span);
      });
    });
  }

  function translateTextNodes(lang) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const parent = node.parentElement;
          if (!parent || parent.closest("script, style, noscript, [data-no-translate]")) {
            return NodeFilter.FILTER_REJECT;
          }

          return normalizeText(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(function (node) {
      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }

      const source = originalText.get(node);
      const key = normalizeText(source);
      const translated = getTranslation(key);

      if (lang === "zh" && translated) {
        node.nodeValue = source.replace(key, translated);
      } else {
        node.nodeValue = source;
      }
    });
  }

  function translateAttributes(lang) {
    document.querySelectorAll("*").forEach(function (node) {
      translatableAttributes.forEach(function (attribute) {
        if (!node.hasAttribute(attribute)) {
          return;
        }

        if (!originalAttributes.has(node)) {
          originalAttributes.set(node, Object.create(null));
        }

        const stored = originalAttributes.get(node);
        if (!stored[attribute]) {
          stored[attribute] = node.getAttribute(attribute);
        }

        const source = stored[attribute];
        const translated = getTranslation(source);
        node.setAttribute(attribute, lang === "zh" && translated ? translated : source);
      });
    });

    if (!originalAttributes.has(document)) {
      originalAttributes.set(document, { title: document.title });
    }

    const titleSource = originalAttributes.get(document).title;
    const titleTranslated = getTranslation(titleSource);
    document.title = lang === "zh" && titleTranslated ? titleTranslated : titleSource;
  }

  function translateKeyedElements(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(function (node) {
      const source = node.getAttribute("data-lang-key");
      const translated = getTranslation(source);
      node.textContent = lang === "zh" && translated ? translated : source;
    });
  }

  function applyLanguage(lang) {
    setToggleState(lang);
    updatePreloaderBrand(lang);
    translateTextNodes(lang);
    translateAttributes(lang);
    translateKeyedElements(lang);

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.niceSelect) {
      window.jQuery(".single-select").niceSelect("update");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getLanguage());

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        const nextLang = getLanguage() === "zh" ? "en" : "zh";
        localStorage.setItem(STORAGE_KEY, nextLang);
        applyLanguage(nextLang);
      });
    });
  });

  document.addEventListener("shop-products-rendered", function () {
    applyLanguage(getLanguage());
  });
})();
