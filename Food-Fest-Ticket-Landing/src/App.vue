<template>
  <div id="app">
    <!-- Header Section -->
    <header class="header">
      <div class="header-content">
        <div class="header-badge">2026 EDITION</div>
        <h1 class="header-title">Cape Town Food Fest</h1>
        <p class="header-subtitle">
          Experience the ultimate culinary celebration
        </p>
        <p class="header-dates">June 23-25, 2026 | V&A Waterfront</p>
        <div class="header-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Food Stalls</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">Chefs</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Live Acts</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <section class="tickets-section">
        <div class="container">
          <div class="section-header">
            <h2>Choose Your Experience</h2>
            <p class="section-description">
              Select the perfect ticket tier for your food festival adventure
            </p>
          </div>
          <TicketList />
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Cape Town Food Fest. All rights reserved.</p>
        <p class="footer-small">Built with Vue.js</p>
      </div>
    </footer>
  </div>
</template>

<script>
import TicketList from "./components/TicketList.vue";

export default {
  name: "App",
  components: {
    TicketList,
  },
};
</script>

<style>
/* Reset and global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  background: #ffffff;
  color: #1a1a2e;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Section */
.header {
  background: #1a1a2e;
  color: #ffffff;
  padding: 80px 20px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.05) 0%,
    transparent 70%
  );
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.header-badge {
  display: inline-block;
  border: 2px solid #ffffff;
  padding: 6px 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.header-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.header-subtitle {
  font-size: 1.3rem;
  color: #cccccc;
  margin-bottom: 8px;
  line-height: 1.5;
}

.header-dates {
  color: #aaaaaa;
  font-size: 1rem;
  font-weight: 500;
}

.header-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
}

.stat-label {
  font-size: 0.85rem;
  color: #999999;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

/* Tickets Section */
.tickets-section {
  padding: 60px 0;
  background: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.section-description {
  font-size: 1.1rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

/* Footer */
.footer {
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 30px 20px;
  margin-top: auto;
  border-top: 1px solid #2a2a3e;
}

.footer .container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-small {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .header-title {
    font-size: 2.5rem;
  }

  .header-subtitle {
    font-size: 1.1rem;
  }

  .header-stats {
    flex-direction: column;
    gap: 15px;
  }

  .stat-divider {
    display: none;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .header {
    padding: 60px 20px 40px;
  }
}
</style>
