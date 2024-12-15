import React, { useState, useEffect } from 'react';

// Example function to simulate fetching recommendations (replace with actual API call)
const fetchRecommendations = async () => {
  // Replace this with your actual API call logic
  return [
    { id: 1, title: 'Increase Credit Limit', description: 'Increasing your credit limit can improve your credit score.' },
    { id: 2, title: 'Pay Down Debt', description: 'Paying down your credit card debt will reduce your credit utilization ratio.' },
    { id: 3, title: 'Diversify Your Credit Mix', description: 'Having a variety of credit types can boost your credit score over time.' },
  ];
};

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const data = await fetchRecommendations();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    getRecommendations();
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Personalized Credit Recommendations</h2>
      <div className="recommendations-list">
        {recommendations.length === 0 ? (
          <p>Loading recommendations...</p>
        ) : (
          recommendations.map((recommendation) => (
            <div key={recommendation.id} className="recommendation-item">
              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recommendations;
