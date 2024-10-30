
  let rabbits = [];  
  let numRabbits = 5;  
  
  function setup() {
      createCanvas(400, 400);
  
      
      let areaX = 100;
      let areaY = 100;
      let areaWidth = 200;
      let areaHeight = 200;
  
      
      for (let i = 0; i < numRabbits; i++) {
          let rabbit = {
              x: random(areaX, areaX + areaWidth),
              y: random(areaY, areaY + areaHeight),
              size: random(40, 80)
          };
          rabbits.push(rabbit);
      }
  }
  
  function draw() {
      background(220);
  
      
      rabbits.forEach(rabbit => {
          push();
          translate(rabbit.x, rabbit.y);
          MakeARabbit(rabbit.size);
          pop();
      });
  }
  
  function MakeARabbit(creatureWidth) {
      // Body
      fill('gray');
      ellipse(0, 0, creatureWidth, creatureWidth * 1.2);  // body is slightly taller than it is wide
  
      // Ears
      fill('gray');
      ellipse(-creatureWidth / 4, -creatureWidth * 0.9, creatureWidth / 4, creatureWidth);  // left ear
      ellipse(creatureWidth / 4, -creatureWidth * 0.9, creatureWidth / 4, creatureWidth);   // right ear
  
      // Eyes
      fill(0);
      ellipse(-creatureWidth / 6, -creatureWidth / 6, creatureWidth / 10, creatureWidth / 10); // left eye
      ellipse(creatureWidth / 6, -creatureWidth / 6, creatureWidth / 10, creatureWidth / 10);  // right eye
  
      // Nose
      fill(255, 182, 193);  
      ellipse(0, 0, creatureWidth / 10, creatureWidth / 15);
  
      // Mouth
      stroke(0);
      line(0, creatureWidth / 15, -creatureWidth / 15, creatureWidth / 8); // left side of mouth
      line(0, creatureWidth / 15, creatureWidth / 15, creatureWidth / 8);  // right side of mouth
  }
  
  function mousePressed() {
      
      let areaX = 100;
      let areaY = 100;
      let areaWidth = 200;
      let areaHeight = 200;
      
      rabbits.forEach(rabbit => {
          rabbit.x = random(areaX, areaX + areaWidth);
          rabbit.y = random(areaY, areaY + areaHeight);
          rabbit.size = random(40, 80);
      });
  }