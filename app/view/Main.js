Ext.define('ecwHW4.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Eriks boring homework #4'
                },

                html:	[	
			    "<hr/>",
			    "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
			    "<br/><br/>"," - Abraham Lincoln - ",
			    "<hr/>"
	                ].join("")
            },
            {
	            title: 'Carousel',
	            iconCls: 'action',
            	xtype: 'carousel',
	            direction: 'vertical',
                items: [
                    {
                	items:[
                	    {
	                		docked: 'top',
	                        xtype: 'titlebar',
	                        title: 'Empty Page'
                	    },
                	    {
                	    	html: '<br/>Well, this is an terrible empty page'
                	    }
                	    ]
                    },{
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: 'Homework #1 - RIP'
                        },
                        {
                            xtype: 'video',
                            url: 'aninstant.mp4',
                            /*maxWidth: '500px',*/	
                            posterUrl: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/GHS-pictogram-skull.svg/300px-GHS-pictogram-skull.svg.png'
                         },
                        {
                        	xtype: 'label',
                            html: 'Click on skull to start video'
                        }
                    ]
                }]
            },
            {
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Me',
                        instructions: '(email address is optional)',
                        height: 285,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                        }
                    }
                ]
            }        ]
    }
});
