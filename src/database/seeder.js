import couch from '@src/database/couchdb'

const NODE_ENV = process.env.NODE_ENV

module.exports.createTables = async () => {
  try { 
    await couch.createDatabase('copbotusers')
    console.log(`Created table copbotusers`)
    return true
  } catch (error) {
    console.log(`Error creating tables ${error}....`)
    return false 
  }
}
module.exports.createUsers = async () => {
  try { 
    await couch.createDatabase('_users')
    console.log(`Created table _users`)
    return true
  } catch (error) {
    console.log(`Error creating tables ${error}....`)
    return false 
  }
}

module.exports.dropAllTables = async () => {
  if (NODE_ENV === "production") {
    console.log(
      "!!!WARNING \nyou can not automatically drop all production tables , if you want to do this head on the admin portal and manually delete the tables\n "
    )
    return
  }
    try{
      await couch.dropDatabase('copbotusers')
      console.log(`dropped table copbotusers`)
      return true
    } catch (error) {
      console.log(`error dropping table copbotusers`)
      return false
    }
}
