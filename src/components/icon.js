let thunderStorm = [
  200,
  201,
  202,
  210,
  211,
  212,
  221,
  230,
  231,
  232
];

let drizzle = [
  300,
  301,
  302,
  310,
  311,
  312,
  313,
  314,
  321 
];

let rain = [
  500,
  501,
  502,
  503,
  504,
  511,
  520,
  521,
  522,
  531
];

let snow = [
  600,
  601,
  602,
  611,
  612,
  613,
  615,
  616,
  620,
  621,
  622
];

let atmosphere = [
  701,
  711,
  721,
  731,
  741,
  751,
  761,
  762,
  771,
  781
];

let Icon={};
for (const key of thunderStorm) {
  Icon[key]='11';
}

for (const key of drizzle) {
  Icon[key]='09';
}

for (const key of rain) {
  if(key<511) {
    Icon[key]='10';
  } else if(key===511) {
    Icon[key]='13';
  } else {
    Icon[key]='09';
  }
}

for (const key of snow) {
  Icon[key]='13';
}

for (const key of atmosphere) {
  Icon[key]='50';
}

Icon[800]='01';
Icon[801]='02';
Icon[802]='03';
Icon[803]='04';
Icon[804]='04';

export default Icon;