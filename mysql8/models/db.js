const mysqlx = require('@mysql/xdevapi');
const config = {
    host: 'localhost',
    port: 33060,
    dbUser: 'root',
    dbPassword: 'root'
}
const schema = 'test_schema';
const collection = 'myCollection';
var d1 = new Date();
find('baz','foo','bar',function (row) {
    console.log(row);
    var d2 = new Date();
    console.log(parseInt(d2-d1));
});

function find(document,colomn,colomnValue,callback) {
    mysqlx
        .getSession(config)
        .then(session => {
            return session
                .startTransaction()
                .then(() => {
                    return session
                        .getSchema(schema)
                        .getCollection(collection)
                        //.modify('name = "foo"')
                        .find("$."+document+"."+colomn+" == '"+colomnValue+"'")
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