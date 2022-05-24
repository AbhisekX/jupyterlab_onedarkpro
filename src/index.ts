import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @abhisek/jupyterlab_onedarkpro extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@abhisek/jupyterlab_onedarkpro:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @abhisek/jupyterlab_onedarkpro is activated!');
    const style = '@abhisek/jupyterlab_onedarkpro/index.css';

    manager.register({
      name: 'JupyterLab OneDarkPro',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
