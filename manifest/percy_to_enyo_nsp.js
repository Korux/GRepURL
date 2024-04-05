define(["jquery", "backbone"], function(a, b) {
    var c = b.Model.extend({
        defaults: {
            manifest: [{
                src: Game.imgUri + "/sp/cjs/nsp_3040279000_01_s2_a.png?s=94714c916a4d71d75337f120701a0bf2",
                id: "nsp_3040279000_01_s2_a",
                type: "image"
            }, {
                src: Game.imgUri + "/sp/cjs/nsp_3040279000_01_s2_b.png?s=3f40f5a452aab9d763d93f7f90caf427",
                id: "nsp_3040279000_01_s2_b",
                type: "image"
            }, {
                src: Game.imgUri + "/sp/cjs/nsp_3040279000_01_s2_c.png?s=3f40f5a452aab9d763d93f7f90caf427",
                id: "nsp_3040279000_01_s2_c",
                type: "image"
            }]
        }
    });
    return c
});
