
const mysqlx = require('@mysql/xdevapi');


function find(callback) {
    mysqlx
        .getSession({
            host: 'localhost',
            port: 33060,
            dbUser: 'root',
            dbPassword: 'root'
        })
        .then(session => {
            return session
                .startTransaction()
                .then(() => {
                    return session
                        .getSchema('test_schema')
                        .getCollection('myCollection')
                        //.modify('name = "foo"')
                        .find("$.baz.foo == 'bar'")
                        .execute(row => {
                            callback(row);
                            //console.log('Found row: %j', row);
                        });
                })
                .then(() => {
                    return session.commit();
                })
                .catch(err => {
                    return session.rollback();
                });
        });
}
find(function(row){
    console.log(row);
})

//const mysql = require('@mysql/xdevapi');


// mysql
//     .getSession({
//         host: 'localhost',
//         port: 33060,
//         dbUser: 'root',
//         dbPassword: 'root'
//     })
//     .then(session => {
//         console.log('Session created');
//
//         //return session.createSchema('test_schema');
//         return session.getSchema('test_schema');
//     })
//     .then(schema => {
//         console.log('Schema created');
//
//         //return schema.createCollection('myCollection');
//         return schema.getCollection('myCollection');
//     })
//     .then(collection => {
//         console.log('Collection created')
//
//         Promise.all([
//             collection
//                 .add({ baz: { foo: 'bar' } }, { foo: { bar: 'baz' } })
//                 .execute(),
//             collection
//                 .find("$.baz.foo == 'bar'")
//                 .execute(row => {
//                     console.log('Found row: %j', row);
//                 })
//                 .then(res => {
//                     console.log('Collection find finished');
//                 }),
//             collection
//                 .remove("($.foo.bar) == 'baz'")
//                 .execute()
//                 .then(() => {
//                     console.log('Document deleted');
//                 })
//             ,
//             collection
//                 .drop()
//                 .then(() => {
//                     console.log('Collection deleted');
//                 })
//         ]);
//     })
//     .then(() => {
//         return session.dropSchema('test_schema');
//     })
//     .then(() => {
//         console.log('Schema deleted');
//
//         return session.close();
//     })
//     .then(() => {
//         console.log('Session destroyed');
//     })
//     .catch(err => {
//         console.log(err.stack);
//     });

