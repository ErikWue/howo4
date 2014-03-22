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

                items: 
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome @ Eriks boring homework #4...'
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
	            iconCls: 'star',
            	xtype: 'carousel',
	            direction: 'vertical',
                items: [
                    {
                	items:[
                	    {
	                		docked: 'top',
	                        xtype: 'titlebar',
	                        title: 'Carousel page 1'
                	    },
                	    {
                	    	html: "<br/>Well, this is a terribly empty page. But wait a second - perhaps there's another one beneath it...!?"
                	    }
                	    ]
                    },{
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: 'Homework #1 - Click it!'
                        },
                        {
                            xtype: 'video',
                            url: 'aninstant.mp4',
                            posterUrl: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/GHS-pictogram-skull.svg/500px-GHS-pictogram-skull.svg.png'
                            /*style: 'background:blue',*/
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
            }        
        ]
    }
});
