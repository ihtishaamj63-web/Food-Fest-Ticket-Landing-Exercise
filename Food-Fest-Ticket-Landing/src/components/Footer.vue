<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- About Section -->
        <div class="footer-section">
          <h4 class="footer-title">About the Event</h4>
          <p class="footer-text">
            Cape Town Food Fest is an annual outdoor food festival bringing
            together chefs, street vendors, and musicians for a weekend of food,
            fun, and community.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link">📱</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">💬</a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-section">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Lineup</a></li>
            <li><a href="#">Vendors</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h4 class="footer-title">Contact Us</h4>
          <ul class="footer-contact">
            <li>📍 V&A Waterfront, Cape Town</li>
            <li>📧 info@foodfest.co.za</li>
            <li>📞 +27 21 123 4567</li>
            <li>🕐 Mon-Fri: 9:00 - 17:00</li>
          </ul>
        </div>

        <!-- Newsletter Section -->
        <div class="footer-section">
          <h4 class="footer-title">Stay Updated</h4>
          <p class="footer-text">
            Subscribe to our newsletter for updates and early bird tickets.
          </p>
          <form class="newsletter-form" @submit.prevent="handleSubscribe">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="newsletter-input"
              required
            />
            <button type="submit" class="newsletter-btn">Subscribe</button>
          </form>
          <p v-if="subscribed" class="subscribe-success">
            ✅ Subscribed successfully!
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copy">
            &copy; 2026 Cape Town Food Fest. All rights reserved.
          </p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span class="footer-divider">|</span>
            <a href="#">Terms of Service</a>
            <span class="footer-divider">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <p class="footer-tech">Built with ❤️ using Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
      subscribed: false,
    };
  },
  methods: {
    handleSubscribe() {
      if (this.email) {
        this.subscribed = true;
        this.email = "";
        setTimeout(() => {
          this.subscribed = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.footer {
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.8);
  padding: 60px 20px 0;
  margin-top: auto;
  border-top: 1px solid #2a2a3e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #2a2a3e;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 8px;
}

.footer-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #ffd700;
}

.footer-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: #ffd700;
  color: #1a1a2e;
  border-color: #ffd700;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #ffd700;
  padding-left: 4px;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter-input {
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.newsletter-input:focus {
  border-color: #ffd700;
}

.newsletter-btn {
  padding: 10px 14px;
  background: #ffd700;
  color: #1a1a2e;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.newsletter-btn:hover {
  background: #e6c200;
  transform: scale(1.02);
}

.subscribe-success {
  color: #4ade80;
  font-size: 0.9rem;
  margin-top: 8px;
}

/* Footer Bottom */
.footer-bottom {
  padding: 20px 0;
  margin-top: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #ffd700;
}

.footer-divider {
  color: rgba(255, 255, 255, 0.2);
}

.footer-tech {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 16px 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-section {
    align-items: center;
    text-align: center;
  }

  .footer-social {
    justify-content: center;
  }

  .newsletter-form {
    width: 100%;
  }

  .footer-bottom-links {
    gap: 8px;
  }
}
</style>
