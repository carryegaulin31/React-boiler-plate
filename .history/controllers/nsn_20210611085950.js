import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllNsns = async (request, response) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return response.send(allNsns)
}

const RandomNsns(allNsns) => {
  for(i = 0; i <; i++) {
    Math.floor(Math.random().nsn.NIIN.length);
  const option = app.options[randomNum];
  console.log(randomNum)
    
  }
}
