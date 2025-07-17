document.getElementById('solarCalculator').addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const custosEnergia = {
        "CPFL": 0.142,
        "CEMIG": 0.224,
        "Eletropaulo": 0.156,
        "Light": 0.179,
        "CEEE": 0.198,
        "Copel": 0.134,
        "Cosern": 0.197,
        "Celpa": 0.188,
        "Energisa": 0.165,
        "Enel": 0.155
    };

    const custoPorPainel = 10000;

    const usoEnergia = parseFloat(document.getElementById('energyUsage').value);
    const quantidadeKits = parseInt(document.getElementById('kitQuantity').value);
    const empresaSelecionada = document.getElementById('company').value;

    const custoEnergiaPorKWh = custosEnergia[empresaSelecionada];

    if (!custoEnergiaPorKWh) {
        console.error(`Custo de energia não encontrado para a empresa ${empresaSelecionada}`);
        return;
    }

    const totalKWh = usoEnergia / custoEnergiaPorKWh;

    const totalKWhGerado = quantidadeKits * 800; 

    const kWhRestante = totalKWh - totalKWhGerado;

    const custoTotal = kWhRestante * custoEnergiaPorKWh;

    const lucroMensal = usoEnergia - custoTotal;

    const mesesParaLucro = (custoPorPainel * quantidadeKits) / lucroMensal;

    const anosParaLucro = Math.floor(mesesParaLucro / 12);
    const mesesRestantes = Math.round(mesesParaLucro % 12);

    document.getElementById('totalKWh').textContent = totalKWh.toFixed(2);
    document.getElementById('totalGeneratedKWh').textContent = totalKWhGerado;
    document.getElementById('remainingKWh').textContent = kWhRestante.toFixed(2);
    document.getElementById('totalCost').textContent = custoTotal.toFixed(2);
    document.getElementById('monthlyProfit').textContent = lucroMensal.toFixed(2);
    document.getElementById('yearsToProfit').textContent = anosParaLucro;
    document.getElementById('remainingMonthsText').textContent = mesesRestantes;
    document.getElementById('result').style.display = 'block';
});
