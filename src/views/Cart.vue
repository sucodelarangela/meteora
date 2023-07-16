<template>
  <section class="basket container mx-auto g-4 px-3 mb-4 mb-xl-5">
    <div class="text-center my-4 my-xl-5 section-title">
      <template v-if="productsInCart.length">
        <div class="item" v-for="(product, index) in productsInCart" :key="index">
          <div class="remove" @click="removeProduct(product.id)">Remover Produto</div>
          <div class="photo"><img :src="product.images[0]" :alt="product.title" /></div>
          <div class="description">{{ product.title }}</div>
          <div class="price">
            <span class="quantity-area">
              <button :disabled="product.quantity <= 1" @click="product.quantity--">-</button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click="product.quantity++">+</button>
            </span>
            <span class="amount">R$ {{ (product.price * product.quantity).toFixed(2) }}</span>
          </div>
        </div>
        <div class="grand-total">Total do pedido: R$ {{ orderTotal() }}</div>
      </template>
      <h4 v-else>Nenhum item no carrinho.</h4>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '../stores/ProductsStore';
import type IProduct from '@/interfaces/IProduct';

const { productsInCart, removeFromCart } = useProductsStore();

const removeProduct = (productId: number) => {
  if (confirm('Você tem certeza que quer remover o item do carrinho?')) {
    removeFromCart(productId);
  }
};

const orderTotal = () => {
  let total = 0;

  productsInCart.forEach((item: IProduct) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
};
</script>

<style lang="scss" scoped>
.basket {
  min-height: 12.5rem;

  .items {
    max-width: 800px;
    margin: 0 auto;

    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {
          margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;
      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
        }
      }
    }

    .grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: right;
      margin-top: 8px;
    }
  }
}
</style>
