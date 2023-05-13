export default {
  "title": "Stardust XR",
  "tagline": "We Fight for the Users!",
  "url": "https://stardustxr.org",
  "baseUrl": "/",
  "trailingSlash": false,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "StardustXR",
  "projectName": "website",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Stardust XR",
      "logo": {
        "alt": "Stardust XR logo, a yellow astroid with smaller white astroids around it",
        "src": "img/icon.webp"
      },
      "items": [
        {
          "href": "/roadmap",
          "position": "left",
          "label": "Roadmap"
        },
        {
          "href": "/about",
          "position": "left",
          "label": "About"
        },
        {
          "type": "doc",
          "docId": "getting-started/overview",
          "position": "left",
          "label": "Docs",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://twitter.com/stardustxr",
          "label": "Twitter",
          "position": "right"
        },
        {
          "href": "https://discord.gg/A9w7fKE",
          "label": "Discord",
          "position": "right"
        },
        {
          "href": "https://matrix.to/#/#stardustxr:matrix.org",
          "label": "Matrix",
          "position": "right"
        },
        {
          "href": "https://github.com/StardustXR",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://github.com/sponsors/technobaboo",
          "label": "Sponsor This",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Roadmap",
              "href": "roadmap"
            },
            {
              "label": "Getting Started",
              "to": "/docs/getting-started/overview"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/A9w7fKE"
            },
            {
              "label": "Matrix",
              "href": "https://matrix.to/#/#stardustxr:matrix.org"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/stardustxr"
            },
            {
              "label": "Stardust XR (GitHub)",
              "href": "https://github.com/StardustXR"
            },
            {
              "label": "Sponsor This",
              "href": "https://github.com/sponsors/technobaboo"
            }
          ]
        },
        {
          "title": "Code",
          "items": [
            {
              "label": "Stardust XR (Server)",
              "href": "https://github.com/StardustXR/stardust-xr-server"
            },
            {
              "label": "stardust-xr (includes Fusion)",
              "href": "https://github.com/StardustXR/stardust-xr"
            },
            {
              "label": "Flatland",
              "href": "https://github.com/StardustXR/flatland"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Nova King"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#000000",
          "backgroundColor": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(0, 128, 0)"
            }
          },
          {
            "types": [
              "builtin"
            ],
            "style": {
              "color": "rgb(0, 112, 193)"
            }
          },
          {
            "types": [
              "number",
              "variable",
              "inserted"
            ],
            "style": {
              "color": "rgb(9, 134, 88)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(0, 0, 0)"
            }
          },
          {
            "types": [
              "constant",
              "char"
            ],
            "style": {
              "color": "rgb(129, 31, 63)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(128, 0, 0)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 0, 0)"
            }
          },
          {
            "types": [
              "deleted",
              "string"
            ],
            "style": {
              "color": "rgb(163, 21, 21)"
            }
          },
          {
            "types": [
              "changed",
              "punctuation"
            ],
            "style": {
              "color": "rgb(4, 81, 165)"
            }
          },
          {
            "types": [
              "function",
              "keyword"
            ],
            "style": {
              "color": "rgb(0, 0, 255)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(38, 127, 153)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#9CDCFE",
          "backgroundColor": "#1E1E1E"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(106, 153, 85)"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "rgb(181, 206, 168)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(100, 102, 149)"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "rgb(156, 220, 254)"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value",
              "template-punctuation"
            ],
            "style": {
              "color": "rgb(206, 145, 120)"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "rgb(215, 186, 125)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(212, 212, 212)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "rgb(220, 220, 170)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "rgb(209, 105, 105)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/hydralm/websiteMain/sidebars.js",
          "editUrl": "https://github.com/StardustXR/website/edit/main/"
        },
        "theme": {
          "customCss": "/home/hydralm/websiteMain/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};