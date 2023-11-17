const availableFreelancers = document.getElementById('available-freelancers');
const averagePrice = document.getElementById('average-price');

const freelancers = [
        {
            name: 'Alice',
            occupation: 'Writer',
            price: 30,
        },
        {
            name: 'Bob',
            occupation: 'Teacher',
            price: 50,
        },
    ]

function updateTable() {
    availableFreelancers.innerHTML = '';
    freelancers.forEach(freelancer => {
        const tableRow = availableFreelancers.insertRow();
        const trName = tableRow.insertCell(0);
        const trOccupation = tableRow.insertCell(1);
        const trPrice = tableRow.insertCell(2);

        trName.textContent = freelancer.name;
        trOccupation.textContent = freelancer.occupation;
        trPrice.textContent = `$${freelancer.price}`;
    });

}

function updateAverage() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = totalPrices / freelancers.length || 0;
    averagePrice.textContent = average.toFixed(0);
}

function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
    updateTable();
    updateAverage();
}

// Simulate new freelancer appearing every few seconds
setInterval(function () {
    const randomOccupation = ['Designer', 'Developer', 'Marketer', 'Consultant'];
    const randomName = ['Paola', 'Claude', 'Katie', 'Cynthia'];
    const randomprice = Math.floor(Math.random() * 100) + 1;
    addFreelancer(randomName[Math.floor(Math.random() * randomName.length)], randomOccupation[Math.floor(Math.random() * randomOccupation.length)], randomprice);
}, 5000);

updateTable();
updateAverage();