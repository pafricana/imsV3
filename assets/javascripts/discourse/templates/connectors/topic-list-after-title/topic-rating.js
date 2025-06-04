export default {
  actions: {
    updateImportance(value) {
      this.updateRating('importance', value);
    },

    updateFeasibility(value) {
      this.updateRating('feasibility', value);
    },

    updateRating(type, value) {
      const topic = this.get('topic');
      
      fetch(`/topics/${topic.id}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({
          rating_type: type,
          value: value
        })
      }).then(() => {
        // Update the local rating
        if (!topic.ratings) {
          topic.ratings = {};
        }
        topic.ratings[type] = value;
      });
    }
  }
};
