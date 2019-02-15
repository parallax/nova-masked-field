# Parallax ~ Nova Masked Field

Parallax Nova Masked Field is a nova plugin that gives you the option of adding in a masked field. It prevents details being shown on the details and index pages and allows you to hide or show masked values in the edit and create pages.

# Usage
  - Installing is as simple as installing a composer plugin (not on packagist just yet so you'll need to do things the old faashion way by doing the following in your composer.json)
    ```json
    "require": {
        "parallax/masked-field": "*"
    },
    "repositories": [
        {
            "type": "path",
            "url": "./nova"
        },
        {
            "type": "vcs",
            "url": "https://github.com/parallax/nova-masked-field/"
        }
    ],
    ```

  - Then just open the resource in which you want to add the Masked Field and add it like you would any other field :)
    ```php
    public function fields(Request $request)
    {
        return [
            ID:make()->sortable(),
            MaskedField::make('<resource name>')
        ];
    }
    ```

### Issues
- If you have any issues then please open up a ticket on Github, or find me [on twitter (click here)](https://twitter.com/JaeToole)



### Todos

 - Add option that allows you to prevent someone from viewing the password (so if you didn't want someone to be able to view the field on the edit screen, you could toggle the button)
 - Allow custom button classes to be passed in as a Vue Prop

License
----

MIT


**Free Stuff, Hell Yeah!**

