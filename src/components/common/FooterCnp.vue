<template>
  <div class="footer-cnp">
    <div class="container">
      <div class="flex-row">
        <div class="flex-row-cnt">
          <div class="logo" style="flex-basis: 50%">
            <router-link to="/"
              ><img src="@/assets/images/logo.svg" alt="logo" aria-label="logo"
            /></router-link>
          </div>
          <div class="row" style="flex-basis: auto">
            <div class="btn primary-btn">
              <button>Subscribe now</button>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="btn secondary-btn">
              <button>Discover what's inside</button>
            </div>
          </div>
        </div>
        <hr class="hr" />
      </div>
      <div
        class="even-columns"
        style="padding-block: var(--section-padding-50)"
      >
        <div>
          <div class="col">
            <h3>Pages</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/">About</router-link></li>
              <li><router-link to="/">Boxes</router-link></li>
              <li><router-link to="/">Blog</router-link></li>
            </ul>
          </div>
          <div class="col">
            <h3>Social Media</h3>
            <ul>
              <li>
                <router-link to="/"><a href="#">Facebook</a></router-link>
              </li>
              <li>
                <router-link to="/"><a href="#">Instagram</a></router-link>
              </li>
              <li>
                <router-link to="/"><a href="#">Twitter</a></router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="form">
          <h2>Subscribe and get 10% OFF</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit seder purus
            quam tellus eros dolor sit amet consectuir.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <hr class="hr" />
      <div class="copy-right">
        <div class="container">
          <span>&copy; Copyright Ibnoukhalkane 2023 © Wellbeing X</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style lang="scss" scoped>
.footer-cnp {
  background-color: var(--primary-color);
  .container {
    padding-top: var(--section-padding-100);
    padding-bottom: var(--section-padding-50);
    .flex-row-cnt {
      padding-bottom: 4rem;
      width: 100%;
      gap: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      a img {
        width: 220px;
      }
    }
    .even-columns {
      padding-block: 30px;
      gap: 2rem;
      div {
        display: flex;
        flex-wrap: wrap;
        .col {
          flex-basis: 250px;
          display: block;
          h3 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
            font-size: var(--fs-7);
          }
          ul li {
            margin-block: 1rem;
            a {
              color: var(--secondary-color);
              font-weight: 500;
              transition: var(--transition);
              font-size: 1.2rem;
              &:hover {
                color: var(--color4);
              }
            }
          }
        }
      }
    }
    .row {
      gap: 2rem;
      display: flex;
    }
  }
  .form {
    border: 1px solid var(--secondary-color);
    border-radius: 30px;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    h2 {
      color: var(--secondary-color);
      font-weight: 500;
    }
    p {
      margin-block: 1rem 2.5rem;
      color: var(--color7);
      line-height: 1.5rem;
      max-width: 500px;
    }
    form {
      display: flex;
      justify-content: space-between;
      background-color: var(--color5);
      border-radius: 50px;
      padding: 0.5rem;
      max-width: 500px;
      input[type="email"] {
        padding: 1rem;
        border-radius: 50px;
      }
      input[type="submit"] {
        padding: 1rem 1.5rem;
        border-radius: 50px;
        background-color: var(--secondary-color);
        color: var(--color5);
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
        &:hover {
          background-color: var(--color4);
          color: var(--secondary-color);
        }
      }
    }
  }
}
.copy-right .container span {
  color: var(--secondary-color);
  font-weight: 400;
  font-size: var(--fs-8);
}
</style>
