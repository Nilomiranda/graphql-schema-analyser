const { getDiff } = require('graphql-schema-diff');

const prodLocation = './prod.graphql';
const devLocation = './dev.graphql';

getDiff(prodLocation, devLocation)
    .then(result => {
        console.log('Analysing...');
        console.log('\n')

        if (!result) {
            console.log('Schemas are identical!');
            return;
        }

        console.log('Diff')
        console.log(result.diff);

        console.log('Dangerous changes:')
        console.log(result.dangerousChanges.length ? result.dangerousChanges : 'No dangerous changes.');

        console.log('Breaking changes:')
        console.log(result.breakingChanges.length ? result.breakingChanges : 'No breaking changes.');
    });