const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { browsers,browsers2 } = config;


async function executeTest2(){
  if(browsers2.length === 0){
    return;
  }
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g,".");
  for(b of browsers2){
      console.log(b);
      if (!fs.existsSync(`./results/${datetime}`)){
          fs.mkdirSync(`./results/${datetime}`, { recursive: true });
      }
      if(b == '1.png'){
          dir = '/login/screenshots/' + b;
      }else if(b == '2.png'){
          dir = '/pages/screenshots/' + b;
      }
      else if(b == '3.png'){
          dir = '/posts/screenshots/' + b;
      }
      else if(b == '4.png'){
          dir = '/staff/screenshots/' + b;
      }
      else if(b == '5.png'){
          dir = '/tags/screenshots/' + b;
      }
      
      const data = await compareImages(
          fs.readFileSync(config.url_screenshots2 + 'v3.3.0' + dir),
          fs.readFileSync(config.url_screenshots2 + 'v3.42.5' + dir)
      );

      resultInfo[b] = {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: data.dimensionDifference,
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: data.diffBounds,
          analysisTime: data.analysisTime
      }
      fs.writeFileSync(`./results/${datetime}/compare-${b}`, data.getBuffer());

  }
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport2(datetime, resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")
  return resultInfo;  
}
(async ()=>console.log(await executeTest2()))();

function browser2(b, info) {
  if(b == '1.png'){
    dir = '/login/screenshots/' + b;
}else if(b == '2.png'){
    dir = '/pages/screenshots/' + b;
}
else if(b == '3.png'){
    dir = '/posts/screenshots/' + b;
}
else if(b == '4.png'){
    dir = '/staff/screenshots/' + b;
}
else if(b == '5.png'){
    dir = '/tags/screenshots/' + b;
}
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>scenario: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Referencia v3.3.0</span>
        <img class="img2" src="../../` + config.url_screenshots2 + `v3.3.0` + dir + `" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Referencia v3.42.5</span>
        <img class="img2" src="../../` + config.url_screenshots2 + `v3.42.5` + dir + `" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diferencia v3.3.0 y la v3.42.5</span>
        <img class="imgfull" src="./compare-${b}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport2(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Reporte generado de screenshots de GHOST  v3.3.0 y la v3.42.5 
                 
            </h1>
            <p>Resemble ejecutado el: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser2(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}