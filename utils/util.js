const escape2Html = (str) => {
    var arrEntities = {
          'lt': '<',
          'gt': '>',
          'nbsp': ' ',
          'amp': '&',
          'quot': '"',
          'middot': '·',
          'amp': '&',
          'brvbar': '¦',
          'mdash': '—',
          'ndash': '–',
          'ge': '≥',
          'le': '≤',
          'laquo': '«',
          'raquo': '»',
          'deg': '°',
          'bull': '•',
          'macr': '¯',
          '#64': '@',
          'rdquo': '“',
          'ldquo': '”',
    };
    let body = str.replace(/&(lt|gt|nbsp|amp|quot|middot|amp|brvbar|mdash|ndash|ge|le|laquo|raquo|deg|bull|macr|#64|rdquo|ldquo);/ig, function(all, t) {
          return arrEntities[t];
    });
  
  let result =  body.replace(/\<p/g, '<p style="margin-block: 0;"')		
  return result.replace(/style="" display="block"/g, 'style="display:block"')
}
module.exports = {
    escape2Html:escape2Html
}