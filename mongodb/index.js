const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const DataBase = 'blog';
//数据库的名称
const Collection = {
    user: 'user',
    blog: 'blog'
    // user是用户表
    // blog是blog文章列表
    // 这里使用枚举
    // 集合的名称「集合等于数据库里面的表」
}
// parameter 是形参
// argument 是实参
// 形参变量只有在被调用时才分配内存单元，在调用结束时，即刻释放所分配的内存单元。因此，形参只在函数内部有效。函数调用结束返回主调用函数后则不能再使用该形参变量。
// 实参可以是常量、变量、表达式、函数等，无论实参是何种类型的量，在进行函数调用时，它们都必须有确定的值，以便把这些值传送给形参。因此应预先用赋值，输入等办法使参数获得确定值。

const connectOption = { useNewUrlParser: true, useUnifiedTopology: true };
// connectOption 是数据库连接配置

const deleteDateMore = (parameter) => {
    //删除符合条件的所有数据
    // data 是条件
    // Collection 是集合的名称
    let argument = parameter ? parameter : {};
    let { data, Collection } = argument;
    data = data ? data : '';

    if (!Collection) {
        throw 'Collection参数缺失.';
    }
    MongoClient.connect(url, connectOption, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DataBase);
        let whereStr = data ? data : {};  // 查询条件
        dbo.collection(Collection).deleteMany(whereStr, function (err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });
}
const deleteDate = (parameter) => {
    //删除符合的第一条数据
    // data 是条件
    // Collection 是集合的名称
    let argument = parameter ? parameter : {};
    let { data, Collection } = argument;
    data = data ? data : '';

    if (!Collection) {
        throw 'Collection参数缺失.';
    }
    MongoClient.connect(url, connectOption, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DataBase);
        let whereStr = data;  // 查询条件
        dbo.collection(Collection).deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });
}
const queryDate = (parameter) => {
    //查询符合的数据
    // data 是条件
    // Collection 是集合的名称
    // option 是查找的选项比如跳过第5条分页
    let argument = parameter ? parameter : {};
    let { data, Collection, option } = argument;
    data = data ? data : '';
    option = option ? option : '';
    if (!Collection) {
        throw 'Collection参数缺失.';
    }
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, connectOption, function (err, db) {
            if (err) throw err;
            let dbo = db.db(DataBase);
            let whereStr = data ? data : {};  // 查询条件
            dbo.collection(Collection).find(whereStr, {...option}).toArray(function (err, result) {
                if (err) throw err;
                resolve(result);
                db.close();
                console.log(result);
                // Buffer.from(result[1]._id.id).toString('hex')
                // 将buffer转换为id
            });
        });
    })
}
const insertData = (parameter) => {
    //插入数据
    // data 是条件
    // Collection 是集合的名称
    let argument = parameter ? parameter : {};
    let { data, Collection } = argument;
    data = data ? data : '';

    if (!Collection) {
        throw 'Collection参数缺失.';
    }
    MongoClient.connect(url, connectOption, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DataBase);
        let item = data;
        dbo.collection(Collection).insertOne(item, function (err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
}
const createDB = () => {
    //数据库插入数据自动创建
    MongoClient.connect(`${url}/${DataBase}`, connectOption, function (err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        db.close();
    });
}
const deleteDB = () => {
    //删除数据库
    MongoClient.connect(`${url}/${DataBase}`, connectOption, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DataBase);
        dbo.dropDatabase((err) => {
            if (err) throw err;
            console.log('数据库删除成功!');
            db.close();
        })
        db.close();
    });
}
const deleteCollection = (parameter) => {
    //删除集合
    let argument = parameter ? parameter : {};
    let { Collection } = argument;

    if (!Collection) {
        throw 'Collection参数缺失.';
    }
    MongoClient.connect(`${url}/${DataBase}`, connectOption, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DataBase);
        // Collection
        dbo.dropCollection(Collection, (err) => {
            if (err) throw err;
            console.log('集合删除成功!');
            db.close();
        })
        db.close();
    });
}
module.exports = {
    deleteDateMore,
    deleteDate,
    queryDate,
    insertData,
    createDB,
    deleteDB,
    deleteCollection,
    Collection
}
// insertData({
//     data: {
//         heaaa: 222,
//     },
//     Collection: Collection.blog
// });
queryDate({
    data: {
        'heaaa': { $ne: '' },
    },
    Collection: Collection.blog
})
// deleteCollection({
//     Collection: Collection.blog
// })
