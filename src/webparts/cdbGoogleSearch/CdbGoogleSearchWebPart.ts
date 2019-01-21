import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CdbGoogleSearchWebPartStrings';
import CdbGoogleSearch from './components/CdbGoogleSearch';
import { ICdbGoogleSearchProps } from './components/ICdbGoogleSearchProps';

export interface ICdbGoogleSearchWebPartProps {
  SearchButtonText: string;
  SearchStringBgText: string;
  GoogleSearchUrl: string;
}

export default class CdbGoogleSearchWebPart extends BaseClientSideWebPart<ICdbGoogleSearchWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICdbGoogleSearchProps > = React.createElement(
      CdbGoogleSearch,
      {
        SearchButtonText: this.properties.SearchButtonText,
        SearchStringBgText: this.properties.SearchStringBgText,
        GoogleSearchUrl: this.properties.GoogleSearchUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('SearchButtonText', {
                  label: strings.SearchButtonTextLabel
                }),
                PropertyPaneTextField('SearchStringBgText', {
                  label: strings.SearchStringBgTextLabel
                }),
                PropertyPaneTextField('GoogleSearchUrl', {
                  label: strings.GoogleSearchUrlLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
