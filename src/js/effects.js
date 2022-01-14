/* NOTE: Array of keys with all elements */
const componentsKeys = [
    {
        componentName: 'buttons',
        context: require.context(`../effects/buttons`, false, /\.vue$/)
    },
    {
        componentName: 'texts',
        context: require.context(`../effects/texts`, false, /\.vue$/)
    },
    {
        componentName: 'loaders',
        context: require.context(`../effects/loaders`, false, /\.vue$/)
    },
    {
        componentName: 'images',
        context: require.context(`../effects/images`, false, /\.vue$/)
    }
];

const { effects, components } = componentsKeys.reduce((accumulator, component) => {
    const currentComponentName = component.componentName;
    const currentEffectList = component.context.keys();

    accumulator.effects[currentComponentName] = {};

    for (const filename of currentEffectList) {
        const name = filename.replace('./', '').replace('.vue', '');
        const rawComponentContent = require(`!!raw-loader!../effects/${currentComponentName}/${name}`).default; 

        const html = /<template>(.*?)<\/template>/g // find html between template tags
            .exec(JSON.stringify(rawComponentContent))[0]
            .replace(/<\/?template>/g, '') // remove template tags
            .replace(/^\\n/, '') // remove leading linebreak
            .replace(/\\n/g, '\n') // replace escape characters
            .replace(/\\"/g, '"');

        const css = /<style scoped>(.*?)<\/style>/g // find css between style tags
            .exec(JSON.stringify(rawComponentContent))[0]
            .replace(/<\/?style(?: scoped)?>/g, '') // remove style tags
            .replace(/^\\n/, '') // remove leading linebreak
            .replace(/\\n/g, '\n'); // replace \n with newlines

        accumulator.effects[currentComponentName][name] = { name, html, css }
        accumulator.components[name] = component.context(filename).default;
    }

    return accumulator;
}, { effects: {}, components: {} });

export { effects, components };