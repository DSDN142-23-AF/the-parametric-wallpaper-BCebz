//your parameter variables go here!
let cellSize = (100)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
  
 
  angleMode(DEGREES)
  noLoop()
}

function wallpaper_background() {
  background(67, 70, 75); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  for(i=0;i<width;i+= cellSize){
    for(j=0;j<height;j+=cellSize)
    {
    listCell = random ([drawCellA,
    drawCellB])
      listCell(i,j)
      
    }
  };
}


function drawCellA(x,y){
  push()  
  noFill()
  translate(x,y)
  arc(0,0,cellSize,cellSize,0,90)
  arc(cellSize,cellSize,cellSize,cellSize,180,270)
  pop()
}

function drawCellB(x,y){
  push()
  noFill()
  translate(x,y)
  arc(cellSize,0,cellSize,cellSize,90,180)
  arc(0,cellSize,cellSize,cellSize,270,360)
  pop()
}
