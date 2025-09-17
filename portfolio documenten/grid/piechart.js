let pie = fetch("pielabels.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (piedatas) {
        const pielabels = [
            "Test1",
            "Test2",
            "Test3",
            "Test4",
            "Test5"
        ];
        
        const piedata = {
            labels: pielabels,
            datasets: [{
                label: "Most played consoles in hours",
                data: piedatas,
                backgroundColors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B9'],
            }]
        };
        
        const pieconfig = {
            type: 'pie',
            data: piedata,
        };
        
        new Chart(document.getElementById("js--chart-3"), pieconfig);
    });
