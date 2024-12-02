import { updateVisitorCount } from '../scripts/visitor-counter.js';

// src/scripts/visitor-counter.js
export function updateVisitorCount() {
  // Get the current visitor count from localStorage
  let visitCount = localStorage.getItem('visitCount');
  if (!visitCount) {
    visitCount = 0;
  }

  // Increment the visitor count
  visitCount = parseInt(visitCount, 10) + 1;

  // Save the updated count back to localStorage
  localStorage.setItem('visitCount', visitCount);

  // Update the DOM element with the new visitor count
  const visitCountElement = document.getElementById('visit-count');
  if (visitCountElement) {
    visitCountElement.textContent = visitCount;
  }
}

