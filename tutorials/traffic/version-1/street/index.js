// Write the code to pass the test

export default (ped) => () => {
   if(JSON.stringify(['right', 'left']) !== JSON.stringify(ped()))
      throw new Error('kill');
}
