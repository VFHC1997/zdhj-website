(function () {
  "use strict";

  const PRODUCTS_URL = "assets/data/products.json";
  const GRID_PAGE_SIZE = 8;
  const LIST_PAGE_SIZE = 5;

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector("#product-app");
    if (!root || !window.Vue) {
      return;
    }

    fetch(PRODUCTS_URL)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load product data.");
        }
        return response.json();
      })
      .then(function (products) {
        mountProductApp(products);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  function mountProductApp(products) {
    const app = window.Vue.createApp({
      data: function () {
        return {
          products: products,
          category: "all",
          activeView: "grid",
          gridPage: 1,
          listPage: 1
        };
      },

      computed: {
        filteredProducts: function () {
          const currentCategory = this.category;
          return this.products.filter(function (product) {
            return currentCategory === "all" || product.category === currentCategory;
          });
        },

        gridTotalPages: function () {
          return Math.max(1, Math.ceil(this.filteredProducts.length / GRID_PAGE_SIZE));
        },

        listTotalPages: function () {
          return Math.max(1, Math.ceil(this.filteredProducts.length / LIST_PAGE_SIZE));
        },

        pagedGridProducts: function () {
          return this.paginate(this.filteredProducts, this.gridPage, GRID_PAGE_SIZE);
        },

        pagedListProducts: function () {
          return this.paginate(this.filteredProducts, this.listPage, LIST_PAGE_SIZE);
        },

        showingText: function () {
          const page = this.activeView === "list" ? this.listPage : this.gridPage;
          const pageSize = this.activeView === "list" ? LIST_PAGE_SIZE : GRID_PAGE_SIZE;
          const total = this.filteredProducts.length;

          if (!total) {
            return this.isChinesePage() ? "\u663e\u793a 0 \u6761\uff0c\u5171 0 \u6761\u7ed3\u679c" : "Showing 0 of 0 results";
          }

          const start = (page - 1) * pageSize + 1;
          const end = Math.min(page * pageSize, total);
          return this.isChinesePage()
            ? "\u663e\u793a " + start + "-" + end + " \u6761\uff0c\u5171 " + total + " \u6761\u7ed3\u679c"
            : "Showing " + start + "-" + end + " of " + total + " results";
        }
      },

      watch: {
        category: function () {
          this.resetPages();
        }
      },

      mounted: function () {
        this.syncLanguage();
      },

      updated: function () {
        this.syncLanguage();
      },

      methods: {
        paginate: function (items, page, pageSize) {
          const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
          const safePage = Math.min(page, totalPages);
          const start = (safePage - 1) * pageSize;
          return items.slice(start, start + pageSize);
        },

        resetPages: function () {
          this.gridPage = 1;
          this.listPage = 1;
        },

        setView: function (view) {
          this.activeView = view;
        },

        changePage: function (view, page) {
          if (view === "list") {
            this.listPage = clamp(page, 1, this.listTotalPages);
          } else {
            this.gridPage = clamp(page, 1, this.gridTotalPages);
          }
          this.scrollToShopTop();
        },

        formatPrice: function (value) {
          return "$" + Number(value).toFixed(2);
        },

        padPage: function (page) {
          return String(page).padStart(2, "0");
        },

        scrollToShopTop: function () {
          const root = this.$el;
          const top = root.getBoundingClientRect().top + window.pageYOffset - 20;
          window.scrollTo({
            top: top,
            behavior: "smooth"
          });
        },

        isChinesePage: function () {
          return document.documentElement.lang.toLowerCase().indexOf("zh") === 0;
        },

        syncLanguage: function () {
          this.$nextTick(function () {
            document.dispatchEvent(new CustomEvent("shop-products-rendered"));
          });
        }
      }
    });

    app.mount("#product-app");
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
})();
