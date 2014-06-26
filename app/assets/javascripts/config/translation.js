Ember.I18n.setLanguage = function(language) {
    Ember.I18n.language = language || 'pt-BR'

    if (Ember.isBlank(Ember.I18n.AllTranslations)) {
        Ember.I18n.AllTranslations = Ember.I18n.translations;
    }

    Ember.I18n.translations = Ember.I18n.AllTranslations[Ember.I18n.language]
}

Ember.I18n.setLanguage()
t = Ember.I18n.t