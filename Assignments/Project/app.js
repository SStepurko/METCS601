const morphs = [
    {name: 'Normal',
        description: 'The standard type of bearded dragons is the Normal morph, which is characterized by ' +
            'a nondescript color from sand to gray with orange or yellow blotches on the beard and around the eyes, ' +
            'dark claws and a light belly. Moreover, depending on the conditions of detention, morphs can differ among ' +
            'themselves even in their behavior. ',
        image: 'resources/Normal.JPEG'},
    {name: 'Hypo',
        description: 'Hypomelanistic or Hypo morphs are distinguished by the light color of their claws. ' +
            'Hypomelanism is a term for a specific mutation in which the lizard still creates black or dark pigments, ' +
            'but cannot “transfer” them to the skin. This leads to a significant clarification of the color scheme of ' +
            'the body of the lizard. This gene is recessive and, therefore, for its manifestation in the offspring, ' +
            'a mother and father are required who already carry this gene. Hypo and Normal are mutually ' +
            'exclusive morphs, that is, normal cannot be hypo, and hypo normal.',
        image: 'resources/Hypo.JPEG'},
    {name: 'Lizerbeck',
        description: '. They have smooth skin on their backs, with absolutely no spikes. ' +
            'The gene responsible for the “hardness” of bearded agamas is co-dominant, that is, ' +
            'the opposite characters appear simultaneously, but do not mix and do not produce an intermediate character.',
        image: 'resources/Lizer.JPEG'},
    {name: 'Traslucent',
        description: 'The Traslucent morph is also quite common or in common people - Trans. ' +
            'A distinctive feature of this morph is translucency, which is most noticeable during the period ' +
            'when the lizard is still young. Trance is actually the result of a genetic disorder that prevents ' +
            'the creation of white pigments in the skin of lizards. They can be recognized by the bluish color of ' +
            'the skin on the abdomen and completely black eyes.',
        image: 'resources/Trans.JPEG'}
]

new Vue({
    el: '#app',
    data: {
        morphs: morphs,
        morph: morphs[0],
        selectedIndex: 0
    },
    methods: {
        selectMorph: function (index) {
            this.morph = morphs[index];
            this.selectedIndex = index
        }
    }
})