exports.getUser = async (ctx,next) =>{
  ctx.body = {
    userName:'阿,李',
    age:30
  }
};

exports.registerUser = async(ctx,next) =>{
  console.log('registerUser',ctx.request.body)
}
