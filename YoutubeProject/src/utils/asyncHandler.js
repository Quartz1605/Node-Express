//This is basically a wrapper function which will be used ahead a lot.

//async handler is function which takes in a function and it executes a function thats the exact syntax.

const asyncHandler = (requestHandler) => {

  return (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((error) => next(err))
  }
}









//const asyncHandler = (func) => async (req,res,next) => {

  //try{

    //await func(req,res,next)

  //}
  //catch(error){
    //res.status(error.code || 500).json({
      //success:false,
      //message:error.message
    //})
  //}



//}

export default asyncHandler