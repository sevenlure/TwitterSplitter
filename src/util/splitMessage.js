export default function splitMessage(input) {
    if (input.length <= 50) return [input]
    
   // let res = input.match(new RegExp('.{1,' + 46 + '}', 'g'))
   let res = chunkString(input,46)
    console.log(res)
    let total = res.length
    let result = res.map((item, index) => {
        return index + 1 + '/' + total + ' ' + item
    })
    result.map((item, index) => {
        console.log(item.length)
    })
    return result
}

var chunkString = function(str, size) {
    var chunks = [];
    var spacePieces = str.split(' ');
    return spacePieces.reduce(function(chunks, piece, index) {
      var isFirstPiece = index === 0;
      var isLastPiece = index === spacePieces.length - 1;
  
      var chunkSeparator = isFirstPiece ? '' : ' ';
      var currentChunk = chunks[chunks.length - 1];
      // If a piece is simply too long, split it up harshly
      if(piece.length > size) {
        // Add whatever we can to the current
        var startingPieceIndex = size - (chunkSeparator + currentChunk).length;
        currentChunk += chunkSeparator + piece.substring(0, startingPieceIndex);
        chunks[chunks.length - 1] = currentChunk;
  
        // Then just add the rest to more chunks
        var leftover = piece.substring(startingPieceIndex);
        for (var i = 0; i < leftover.length; i += size) {
          chunks.push(leftover.substring(i, i + size));
        }
      }
      // Otherwise try to split nicely at spaces
      else if((currentChunk + chunkSeparator + piece).length <= size) {
        currentChunk += chunkSeparator + piece;
        chunks[chunks.length - 1] = currentChunk;
      }
      // If we simply reached max for this chunk, move to the next one
      else {
        currentChunk = piece;
        chunks.push('');
        chunks[chunks.length - 1] = currentChunk;
      }
  
      return chunks;
    }, ['']);
  };
  
  