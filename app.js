// https://calculator.swiftutors.com/dupont-analysis-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonEquityRadio = document.getElementById('returnonEquityRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const netSalesRadio = document.getElementById('netSalesRadio');
const netAssetsRadio = document.getElementById('netAssetsRadio');
const netEquityRadio = document.getElementById('netEquityRadio');

let returnonEquity;
let netIncome = v1;
let netSales = v2;
let netAssets = v3;
let netEquity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

returnonEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income';
  variable2.textContent = 'Net Sales';
  variable3.textContent = 'Net Assets';
  variable4.textContent = 'Net Equity';
  netIncome = v1;
  netSales = v2;
  netAssets = v3;
  netEquity = v4;
  result.textContent = '';
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity';
  variable2.textContent = 'Net Sales';
  variable3.textContent = 'Net Assets';
  variable4.textContent = 'Net Equity';
  returnonEquity = v1;
  netSales = v2;
  netAssets = v3;
  netEquity = v4;
  result.textContent = '';
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Net Assets';
  variable4.textContent = 'Net Equity';
  returnonEquity = v1;
  netIncome = v2;
  netAssets = v3;
  netEquity = v4;
  result.textContent = '';
});

netAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Net Sales';
  variable4.textContent = 'Net Equity';
  returnonEquity = v1;
  netIncome = v2;
  netSales = v3;
  netEquity = v4;
  result.textContent = '';
});

netEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Net Sales';
  variable4.textContent = 'Net Assets';
  returnonEquity = v1;
  netIncome = v2;
  netSales = v3;
  netAssets = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonEquityRadio.checked)
    result.textContent = `Return on Equity = ${computeReturnonEquity().toFixed(2)} %`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;

  else if(netAssetsRadio.checked)
    result.textContent = `Net Assets = ${computeNetAssets().toFixed(2)}`;

  else if(netEquityRadio.checked)
    result.textContent = `Net Equity = ${computeNetEquity().toFixed(2)}`;
})

// calculation

// the law from google ---> (net income / sales) x (sales / total assets) x (total assets / common equity)

function computeReturnonEquity() {
  return ((Number(netIncome.value) / Number(netSales.value)) * (Number(netSales.value) / Number(netAssets.value)) * (Number(netAssets.value) / Number(netEquity.value))) * 100;
}

function computeNetIncome() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeNetSales() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeNetAssets() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeNetEquity() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}