<template>
  <div class="ticket-list">
    <div class="container">
      <!-- Filter/Sort Controls -->
      <div class="controls">
        <div class="controls-left">
          <span class="ticket-count">{{ ticketCount }} Tickets Available</span>
        </div>
        <div class="controls-right">
          <button
            class="sort-btn"
            :class="{ active: sortBy === 'price' }"
            @click="sortByPrice"
          >
            Sort by Price {{ sortOrder === "asc" ? "↑" : "↓" }}
          </button>
          <button
            class="sort-btn"
            :class="{ active: sortBy === 'featured' }"
            @click="sortByFeatured"
          >
            Show Featured First
          </button>
        </div>
      </div>

      <!-- Tickets Grid -->
      <div class="tickets-grid">
        <TicketCard
          v-for="ticket in sortedTickets"
          :key="ticket.id"
          :ticket="ticket"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TicketCard from "./TicketCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "TicketList",
  components: {
    TicketCard,
  },
  data() {
    return {
      sortBy: null,
      sortOrder: "asc",
    };
  },
  computed: {
    ...mapState(["tickets"]),
    ...mapGetters(["ticketCount"]),
    sortedTickets() {
      let sorted = [...this.tickets];

      if (this.sortBy === "price") {
        sorted.sort((a, b) => {
          return this.sortOrder === "asc"
            ? a.price - b.price
            : b.price - a.price;
        });
      } else if (this.sortBy === "featured") {
        sorted.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return a.price - b.price;
        });
      }

      return sorted;
    },
  },
  methods: {
    sortByPrice() {
      if (this.sortBy === "price") {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortBy = "price";
        this.sortOrder = "asc";
      }
    },
    sortByFeatured() {
      this.sortBy = this.sortBy === "featured" ? null : "featured";
    },
  },
};
</script>

<style scoped>
.ticket-list {
  padding: 40px 0 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Controls */
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 16px 20px;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  flex-wrap: wrap;
  gap: 12px;
}

.controls-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ticket-count {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1a1a2e;
}

.controls-right {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.sort-btn {
  background: #ffffff;
  border: 2px solid #cccccc;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sort-btn:hover {
  background: #f0f0f0;
  border-color: #999999;
}

.sort-btn.active {
  background: #1a1a2e;
  border-color: #1a1a2e;
  color: #ffffff;
}

/* Tickets Grid */
.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  align-items: stretch;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .controls-left {
    justify-content: center;
  }

  .controls-right {
    justify-content: center;
  }

  .tickets-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
