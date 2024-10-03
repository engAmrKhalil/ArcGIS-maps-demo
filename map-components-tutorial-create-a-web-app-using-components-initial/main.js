/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "./style.css";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-map";

import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-shell";

//import the setAssetPath function from calcite-components
import { setAssetPath } from "@esri/calcite-components/dist/components";
//CDN hosted calcite components assets
setAssetPath = "https://js.arcgis.com/calcite-components/2.12.2/assets" ;

const arcgisLayerList = document.querySelector('arcgis-layer-list');

arcgisLayerList.listItemCreatedFunction =(event) =>{
  const {item} = event ;
  if(item.layer.type !== "group"){
    item.panel = {
      content : "legend"
    };
  }
};

//get a refrence to arcgis-map element
const arcgisMap = docuemtn.querySelector("arcgis-map");

arcgisMap.addEventListener('arcgisViewReadyChange' , () =>{
  const {portalItem} = arcgisMap.map ; 

  const navigationLogo =document.querySelector("calcite-navigation-logo");
  navigationLogo.heading = portalItem.title;
  navigationLogo.description = portalItem.snippet;
  navigationLogo.thumbnail = portalItem.thumbnailUrl; 
  
  const layer = arcgisMap.map.layers.find((layer) => layer.id === "Accidental_Deaths_8938");
  layer.popupTemplate.title = "Accidental Deaths";

});