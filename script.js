const plans = [
    { id: 1, name: 'Daily Basic Pack', price: '₹49', validity: '28 days', data: '1 GB/day', speed: '4G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '1 day', messageLimit: '100 SMS/day' },
    { id: 2, name: 'Monthly Unlimited Pack', price: '₹599', validity: '30 days', data: 'Unlimited', speed: '4G', operator: 'Airtel', unlimited: true, tacklingTime: 'Immediate', usageTime: null, messageLimit: 'Unlimited SMS' },
    { id: 3, name: 'Weekly Super Saver Pack', price: '₹149', validity: '7 days', data: '2 GB/day', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '7 days', messageLimit: '100 SMS/day' },
    { id: 4, name: 'Long-term 2GB Pack', price: '₹599', validity: '56 days', data: '2 GB/day', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '56 days', messageLimit: '100 SMS/day' },
    { id: 5, name: 'Mega Pack', price: '₹349', validity: '28 days', data: '3 GB/day', speed: '4G', operator: 'Vodafone Idea', unlimited: false, tacklingTime: 'Immediate', usageTime: '28 days', messageLimit: '100 SMS/day' },
    { id: 6, name: 'Annual Plan', price: '₹1999', validity: '365 days', data: '1 GB/day', speed: '4G', operator: 'Vodafone Idea', unlimited: false, tacklingTime: 'Immediate', usageTime: '365 days', messageLimit: '100 SMS/day' },
    { id: 7, name: 'Postpaid Classic Plan', price: '₹999', validity: '30 days', data: '5 GB/day', speed: '5G', operator: 'BSNL', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: 'Unlimited SMS' },
    { id: 8, name: 'Prepaid Advantage Pack', price: '₹499', validity: '90 days', data: '2 GB/day', speed: '4G', operator: 'BSNL', unlimited: false, tacklingTime: 'Immediate', usageTime: '90 days', messageLimit: '100 SMS/day' },
    { id: 9, name: 'Ultra Data Plan', price: '₹799', validity: '60 days', data: '4 GB/day', speed: '5G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '60 days', messageLimit: '100 SMS/day' },
    { id: 10, name: 'Weekly Budget Pack', price: '₹99', validity: '7 days', data: '1.5 GB/day', speed: '4G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '7 days', messageLimit: '100 SMS/day' },
    { id: 11, name: 'Monthly Data Saver', price: '₹349', validity: '30 days', data: '2 GB/day', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 12, name: 'Super Unlimited Plan', price: '₹799', validity: '30 days', data: 'Unlimited', speed: '4G', operator: 'Vodafone Idea', unlimited: true, tacklingTime: 'Immediate', usageTime: null, messageLimit: 'Unlimited SMS' },
    { id: 13, name: 'Long-term Data Plan', price: '₹1099', validity: '84 days', data: '1.5 GB/day', speed: '4G', operator: 'BSNL', unlimited: false, tacklingTime: 'Immediate', usageTime: '84 days', messageLimit: '100 SMS/day' },
    { id: 14, name: 'Family Plan', price: '₹1499', validity: '30 days', data: '6 GB/day', speed: '5G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: 'Unlimited SMS' },
    { id: 15, name: 'Weekend Special Pack', price: '₹199', validity: '5 days', data: '2 GB/day', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '5 days', messageLimit: '100 SMS/day' },
    { id: 16, name: 'Premium Unlimited Plan', price: '₹1299', validity: '30 days', data: 'Unlimited', speed: '5G', operator: 'Vodafone Idea', unlimited: true, tacklingTime: 'Immediate', usageTime: null, messageLimit: 'Unlimited SMS' },
    { id: 17, name: 'Student Plan', price: '₹249', validity: '30 days', data: '3 GB/day', speed: '4G', operator: 'BSNL', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 18, name: 'Travel Pack', price: '₹599', validity: '15 days', data: '2 GB/day', speed: '4G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '15 days', messageLimit: '100 SMS/day' },
    { id: 19, name: 'Corporate Plan', price: '₹1999', validity: '60 days', data: '5 GB/day', speed: '5G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '60 days', messageLimit: 'Unlimited SMS' },
    { id: 20, name: 'Festive Offer Pack', price: '₹399', validity: '30 days', data: '3 GB/day', speed: '4G', operator: 'Vodafone Idea', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 21, name: 'Unlimited Nights Plan', price: '₹299', validity: '30 days', data: 'Unlimited Night Data', speed: '4G', operator: 'Airtel', unlimited: true, tacklingTime: 'Immediate', usageTime: null, messageLimit: 'Unlimited SMS' },
    { id: 22, name: 'Data Family Plan', price: '₹1799', validity: '30 days', data: '10 GB/day', speed: '5G', operator: 'BSNL', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 23, name: 'Light User Pack', price: '₹199', validity: '30 days', data: '1 GB/day', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 24, name: 'High-Speed Data Plan', price: '₹899', validity: '28 days', data: '5 GB/day', speed: '5G', operator: 'Vodafone Idea', unlimited: false, tacklingTime: 'Immediate', usageTime: '28 days', messageLimit: '100 SMS/day' },
    { id: 25, name: 'Short-term Data Pack', price: '₹299', validity: '15 days', data: '2 GB/day', speed: '4G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '15 days', messageLimit: '100 SMS/day' },
    { id: 26, name: 'Travel International Pack', price: '₹2499', validity: '30 days', data: 'Unlimited', speed: '4G', operator: 'BSNL', unlimited: true, tacklingTime: 'Immediate', usageTime: null, messageLimit: 'Unlimited SMS' },
    { id: 27, name: 'Happy Hour Pack', price: '₹199', validity: '30 days', data: '2 GB/hour', speed: '4G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 28, name: 'Data Booster Plan', price: '₹349', validity: '30 days', data: '1 GB bonus', speed: '4G', operator: 'Vodafone Idea', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 29, name: 'Stream and Play Pack', price: '₹499', validity: '30 days', data: '2 GB/day', speed: '5G', operator: 'Airtel', unlimited: false, tacklingTime: 'Immediate', usageTime: '30 days', messageLimit: '100 SMS/day' },
    { id: 30, name: 'Long-term Family Plan', price: '₹2499', validity: '90 days', data: '4 GB/day', speed: '5G', operator: 'Jio', unlimited: false, tacklingTime: 'Immediate', usageTime: '90 days', messageLimit: '100 SMS/day' },
];

let favorites = [];

// Function to display plans
function displayPlans(filteredPlans) {
    const plansContainer = document.getElementById('plans');
    plansContainer.innerHTML = ''; // Clear previous plans
    filteredPlans.forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.className = 'plan';
        planDiv.innerHTML = `
            <h2>${plan.name}</h2>
            <p><strong>Price:</strong> ${plan.price}</p>
            <p><strong>Validity:</strong> ${plan.validity}</p>
            <p><strong>Data:</strong> ${plan.data}</p>
            <p><strong>Speed:</strong> ${plan.speed}</p>
            <p><strong>Unlimited:</strong> ${plan.unlimited ? 'Yes' : 'No'}</p>
            <p><strong>Usage Time:</strong> ${plan.usageTime || 'N/A'}</p>
            <p><strong>Message Limit:</strong> ${plan.messageLimit}</p>
            <div class="button-container">
                <button onclick="openModal(${plan.id})">Recharge</button>
                <button onclick="toggleFavorite(${plan.id})" class="${favorites.includes(plan.id) ? 'favorited' : ''}">★ Favorite</button>
            </div>
        `;
        plansContainer.appendChild(planDiv);
    });
}

// Function to toggle favorites
function toggleFavorite(planId) {
    if (favorites.includes(planId)) {
        favorites = favorites.filter(id => id !== planId); // Remove from favorites
    } else {
        favorites.push(planId); // Add to favorites
    }
    displayPlans(plans); // Refresh the plan display
    displayFavorites(); // Update favorites display
}

// Function to display favorites
function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = ''; // Clear previous favorites
    favorites.forEach(favoriteId => {
        const plan = plans.find(p => p.id === favoriteId);
        const favoriteDiv = document.createElement('div');
        favoriteDiv.className = 'plan';
        favoriteDiv.innerHTML = `
            <h2>${plan.name}</h2>
            <p><strong>Price:</strong> ${plan.price}</p>
            <div class="button-container">
                <button onclick="openModal(${plan.id})">Recharge</button>
            </div>
        `;
        favoritesContainer.appendChild(favoriteDiv);
    });
}

// Function to open modal
function openModal(planId) {
    const plan = plans.find(p => p.id === planId);
    document.getElementById('confirmation-message').innerText = `Are you sure you want to recharge with ${plan.name} for ${plan.price}?`;
    document.getElementById('modal').style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Confirm recharge button
document.getElementById('confirm-recharge').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (!phoneNumber) {
        alert('Please enter a valid phone number.');
        return;
    }
    document.getElementById('loading-spinner').style.display = "block";
    setTimeout(() => {
        document.getElementById('loading-spinner').style.display = "none";
        alert(`Recharge successful for ${phoneNumber}`);
        closeModal();
    }, 2000);
});

// Filtering plans based on operator selection
document.getElementById('operator').addEventListener('change', function() {
    const selectedOperator = this.value;
    const filteredPlans = selectedOperator === 'all' 
        ? plans 
        : plans.filter(plan => plan.operator === selectedOperator);
    displayPlans(filteredPlans);
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredPlans = plans.filter(plan => plan.name.toLowerCase().includes(searchTerm));
    displayPlans(filteredPlans);
});

// Initial display of plans
displayPlans(plans);
