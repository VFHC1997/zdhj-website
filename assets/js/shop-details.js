(function () {
  "use strict";

  const PRODUCTS_URL = "assets/data/products.json";

  document.addEventListener("DOMContentLoaded", function () {
    const titleNode = document.querySelector("#shop-detail-title");
    if (!titleNode) {
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
        const product = findProduct(products);
        if (product) {
          renderProduct(product);
          renderRelatedProducts(products, product);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  function findProduct(products) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const title = params.get("title");

    if (id) {
      const numericId = Number(id);
      const matchedById = products.find(function (product) {
        return Number(product.id) === numericId;
      });
      if (matchedById) {
        return matchedById;
      }
    }

    if (title) {
      const decodedTitle = decodeURIComponent(title);
      return products.find(function (product) {
        return product.title === decodedTitle;
      });
    }

    return products[0];
  }

  function renderProduct(product) {
    const pageTitleNode = document.querySelector("#shop-detail-page-title");
    const breadcrumbTitleNode = document.querySelector("#shop-detail-breadcrumb-title");
    const titleNode = document.querySelector("#shop-detail-title");
    const imageNode = document.querySelector("#shop-detail-image");
    const contentNode = document.querySelector("#shop-detail-content");

    if (pageTitleNode) {
      pageTitleNode.textContent = product.title;
    }
    if (breadcrumbTitleNode) {
      breadcrumbTitleNode.textContent = product.title;
    }
    if (titleNode) {
      titleNode.textContent = product.title;
    }
    if (imageNode) {
      imageNode.setAttribute("src", product.image);
      imageNode.setAttribute("alt", product.title);
    }
    if (contentNode) {
      contentNode.innerHTML = window.ZDHJ_RENDER_PRODUCT_DETAILS
        ? window.ZDHJ_RENDER_PRODUCT_DETAILS(product)
        : "<p>" + escapeHtml(product.description || "") + "</p>";
    }

    document.title = product.title + " - 中大恒建";
  }

  function renderRelatedProducts(products, currentProduct) {
    const relatedNode = document.querySelector("#related-products");
    if (!relatedNode) {
      return;
    }

    const sameCategoryProducts = products.filter(function (product) {
      return product.category === currentProduct.category && Number(product.id) !== Number(currentProduct.id);
    });
    const sourceProducts = sameCategoryProducts.length >= 3
      ? sameCategoryProducts
      : products.filter(function (product) {
          return Number(product.id) !== Number(currentProduct.id);
        });
    const relatedProducts = shuffleProducts(sourceProducts).slice(0, 3);

    relatedNode.innerHTML = relatedProducts.map(function (product, index) {
      const delay = "." + ((index + 1) * 2 + 1) + "s";
      return [
        '<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="' + delay + '">',
        '<div class="gt-shop-card-items bg-style">',
        '<div class="gt-shop-image">',
        '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.title) + '">',
        '<ul class="gt-shop-icon d-grid justify-content-center align-items-center">',
        '<li>',
        '<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-product-id="' + escapeHtml(product.id) + '">',
        '<i class="far fa-eye"></i>',
        '</button>',
        '</li>',
        '</ul>',
        '</div>',
        '<div class="gt-shop-content">',
        '<span class="gt-product-category">' + escapeHtml(product.categoryLabel || "") + '</span>',
        '<h3><a href="' + getProductUrl(product) + '">' + escapeHtml(product.title) + '</a></h3>',
        '<p>' + escapeHtml(product.description || "") + '</p>',
        '</div>',
        '</div>',
        '</div>'
      ].join("");
    }).join("");

    relatedNode.querySelectorAll("[data-product-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        const productId = Number(button.getAttribute("data-product-id"));
        const selectedProduct = products.find(function (product) {
          return Number(product.id) === productId;
        });
        updateProductModal(selectedProduct);
      });
    });
  }

  function updateProductModal(product) {
    const imageNode = document.querySelector("#product-modal-image");
    const titleNode = document.querySelector("#product-modal-title");
    const detailsNode = document.querySelector("#product-modal-details");
    if (!product || !imageNode || !titleNode || !detailsNode) {
      return;
    }

    imageNode.setAttribute("src", product.image);
    imageNode.setAttribute("alt", product.title);
    titleNode.textContent = product.title;
    detailsNode.innerHTML = window.ZDHJ_RENDER_PRODUCT_DETAILS
      ? window.ZDHJ_RENDER_PRODUCT_DETAILS(product)
      : "<p>" + escapeHtml(product.description || "") + "</p>";
  }

  function shuffleProducts(products) {
    const result = products.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      const temp = result[index];
      result[index] = result[swapIndex];
      result[swapIndex] = temp;
    }
    return result;
  }

  function getProductUrl(product) {
    return "shop-details.html?id=" + encodeURIComponent(product.id);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
