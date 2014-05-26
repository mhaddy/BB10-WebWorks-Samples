/*
 * Copyright 2014 BlackBerry.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


Ext.define('SenchaTouchSample.view.About', {
    extend: 'Ext.Container',
    xtype: 'aboutcard',

    config: {

        items: [

                {
                  xtype: 'toolbar',
                  docked: 'top',
                  title: 'About',
                },
                {
                  xtype: 'toolbar',
                  docked: 'bottom',
                  items: [
                          {
                            xtype: 'button',
                            ui: 'back',
                            text: 'Back',
                            handler: function() {
                                var homecard = Ext.create('SenchaTouchSample.view.Home');
                                Ext.Viewport.setActiveItem(homecard);
                            }
                                        
                          }
                        ]
                }
               ]
    }
});

      

    