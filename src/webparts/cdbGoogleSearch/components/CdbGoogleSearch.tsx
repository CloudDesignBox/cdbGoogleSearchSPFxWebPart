import * as React from 'react';
import styles from './CdbGoogleSearch.module.scss';
import { ICdbGoogleSearchProps } from './ICdbGoogleSearchProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export default class CdbGoogleSearch extends React.Component<ICdbGoogleSearchProps, {}> {
  public render(): React.ReactElement<ICdbGoogleSearchProps> {
    return (
      <div className={ styles.googlesearch }>
        <div className={styles.googleSearchBox}>
          <SearchBox
            placeholder={this.props.SearchStringBgText}
            onSearch={newValue => this.RunGoogle(newValue)}
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            onChange={LiveValue => this.liveValueset(LiveValue)}
            labelText= {this.props.SearchStringBgText}
            id= "cdbsearchbox"
          />
        </div>
        <div>
          <PrimaryButton
            data-automation-id="test"
            text={this.props.SearchButtonText}
            onClick={newValue => this.RunGoogle("buttonPressed")}
          />
        </div>
      </div>
    );
  }

  // Set search string
  private liveValue : string = "";
  private liveValueset(LiveValue:string){
    this.liveValue = LiveValue;
  }

  // Open google in new tab
  private RunGoogle(newValue:string){
    if(newValue == "buttonPressed"){
      newValue = this.liveValue;
    }
    window.open(this.props.GoogleSearchUrl + newValue, "_blank" );
  }
}
