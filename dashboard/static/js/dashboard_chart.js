$(document).ready(function() {
    // Assuming you have an HTML canvas element with the ID 'myChart'
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Placeholder for X-axis labels (dates)
            datasets: [{
                label: 'Data Visualization',
                data: [], // Data points will be added here
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        parser: 'YYYY-MM-DDTHH:mm:ssZ',
                        tooltipFormat: 'll'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });

    function fetchData() {
        $.ajax({
            url: '/api/data/', // Correct endpoint
            dataType: 'json', // Tells jQuery to parse the response as JSON automatically
            success: function(response) {
                // Directly use 'response' which is already parsed as a JSON object
                console.log(response); // Log to see the structure
                var values = response.data.map(d => d.value);
                var dates = response.data.map(d => d.date_created);
    
                myChart.data.labels = dates;
                myChart.data.datasets.forEach((dataset) => {
                    dataset.data = values;
                });
                myChart.update();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('AJAX error:', textStatus, 'Details:', errorThrown);
            }
        });
    }
    

    // Fetch data every 5 seconds for real-time updates
    setInterval(fetchData, 5000);
});
