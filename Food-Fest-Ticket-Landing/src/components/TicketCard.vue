<template>
  <div
    class="ticket-card"
    :class="{ featured: ticket.isFeatured }"
    :style="cardStyles"
  >
    <!-- Featured Badge -->
    <div
      v-if="ticket.isFeatured"
      class="featured-badge"
      :style="featuredBadgeStyles"
    >
      ⭐ FEATURED
    </div>

    <!-- Ticket Tier Badge -->
    <div class="tier-badge" :style="tierBadgeStyles">
      {{ ticket.name }}
    </div>

    <!-- Ticket Content -->
    <div class="ticket-content">
      <div class="ticket-header">
        <div class="ticket-icon" :style="iconStyles">
          {{ getTierIcon() }}
        </div>
        <h3 class="ticket-name" :style="nameStyles">{{ ticket.name }}</h3>
      </div>

      <div class="ticket-price" :style="priceStyles">
        ${{ ticket.price }}
        <span class="price-label">/ person</span>
      </div>

      <p class="ticket-description">{{ ticket.description }}</p>

      <ul class="benefits-list">
        <li
          v-for="(benefit, index) in ticket.benefits"
          :key="index"
          class="benefit-item"
        >
          <span class="benefit-check">✓</span>
          {{ benefit }}
        </li>
      </ul>

      <!-- Favorite Button -->
      <button
        class="favorite-btn"
        :class="{ 'is-favorite': isFavorited }"
        @click="handleToggleFavorite"
      >
        {{ isFavorited ? "★" : "☆" }}
        <span class="favorite-text">
          {{ isFavorited ? " Favorited" : " Add to Favorites" }}
        </span>
      </button>

      <!-- Call to Action -->
      <button class="cta-btn" :style="ctaStyles">
        {{ ticket.isFeatured ? "🎟️ Get Tickets Now" : "Learn More" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TicketCard",
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isFavorite"]),
    isFavorited() {
      return this.isFavorite(this.ticket.id);
    },
    cardStyles() {
      return {
        borderColor: this.ticket.borderColor,
        backgroundColor: this.ticket.bgColor,
      };
    },
    featuredBadgeStyles() {
      return {
        backgroundColor: this.ticket.color,
        color: this.ticket.name === "Silver" ? "#333" : "#fff",
      };
    },
    tierBadgeStyles() {
      return {
        backgroundColor: this.ticket.color,
        color: this.ticket.name === "Silver" ? "#333" : "#fff",
        borderColor: this.ticket.borderColor,
      };
    },
    nameStyles() {
      return {
        color: this.ticket.color,
      };
    },
    priceStyles() {
      return {
        color: this.ticket.color,
        borderColor: this.ticket.borderColor,
      };
    },
    ctaStyles() {
      if (this.ticket.isFeatured) {
        return {
          backgroundColor: this.ticket.color,
          color: this.ticket.name === "Silver" ? "#333" : "#fff",
        };
      }
      return {
        backgroundColor: this.ticket.color,
        color: this.ticket.name === "Silver" ? "#333" : "#fff",
        opacity: "0.7",
      };
    },
    iconStyles() {
      return {
        backgroundColor: this.ticket.color,
        color: this.ticket.name === "Silver" ? "#333" : "#fff",
      };
    },
  },
  methods: {
    ...mapActions(["toggleFavorite"]),
    handleToggleFavorite() {
      this.toggleFavorite(this.ticket.id);
    },
    getTierIcon() {
      const icons = {
        Bronze: "🥉",
        Silver: "🥈",
        Gold: "🥇",
      };
      return icons[this.ticket.name] || "🎫";
    },
  },
};
</script>

<style scoped>
.ticket-card {
  border: 3px solid #e0e0e0;
  padding: 28px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  background: #ffffff;
}

.ticket-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Featured styling */
.ticket-card.featured {
  border-width: 4px;
  transform: scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.ticket-card.featured:hover {
  transform: scale(1.02) translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.featured-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  padding: 6px 20px;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-radius: 0;
  text-transform: uppercase;
}

.tier-badge {
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 16px;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 1px;
  border-right: 2px solid;
  border-bottom: 2px solid;
  text-transform: uppercase;
}

.ticket-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 12px;
}

.ticket-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.ticket-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border-radius: 0;
  flex-shrink: 0;
}

.ticket-name {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ticket-price {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 12px 0 16px 0;
  border-bottom: 3px solid #e0e0e0;
  padding-bottom: 12px;
}

.price-label {
  font-size: 0.9rem;
  font-weight: 400;
  color: #666666;
}

.ticket-description {
  color: #444444;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  flex-grow: 1;
}

.benefit-item {
  padding: 8px 0;
  color: #333333;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.benefit-item:last-child {
  border-bottom: none;
}

.benefit-check {
  font-weight: 700;
  color: #1a1a2e;
}

.favorite-btn {
  background: none;
  border: 2px solid #cccccc;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  color: #333333;
}

.favorite-btn:hover {
  background: #f5f5f5;
  border-color: #999999;
}

.favorite-btn.is-favorite {
  background: #f0f0f0;
  border-color: #1a1a2e;
  color: #1a1a2e;
}

.favorite-text {
  font-size: 0.95rem;
}

.cta-btn {
  border: none;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-btn:hover {
  opacity: 0.85;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .ticket-card {
    padding: 20px;
  }

  .ticket-card.featured {
    transform: scale(1);
  }

  .ticket-card.featured:hover {
    transform: translateY(-5px);
  }

  .ticket-name {
    font-size: 1.5rem;
  }

  .ticket-price {
    font-size: 2.2rem;
  }

  .ticket-icon {
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
  }
}
</style>
