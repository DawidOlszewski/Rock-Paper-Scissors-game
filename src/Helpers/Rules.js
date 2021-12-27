const Rules = {};
Rules['rock'] = {};
Rules['paper'] = {};
Rules['scissors'] = {};
Rules['lizard'] = {};
Rules['spock'] = {};

Rules['rock']['rock'] = 'draw';
Rules['rock']['paper'] = 'lose';
Rules['rock']['scissors'] = 'win';
Rules['rock']['lizard'] = 'win';
Rules['rock']['spock'] = 'lose';

Rules['paper']['rock'] = 'win';
Rules['paper']['paper'] = 'draw';
Rules['paper']['scissors'] = 'lose';
Rules['paper']['lizard'] = 'draw';
Rules['paper']['spock'] = 'win';

Rules['scissors']['rock'] = 'lose';
Rules['scissors']['paper'] = 'win';
Rules['scissors']['scissors'] = 'draw';
Rules['scissors']['lizard'] = 'win';
Rules['scissors']['spock'] = 'lose';

Rules['lizard']['rock'] = 'lose';
Rules['lizard']['paper'] = 'win';
Rules['lizard']['scissors'] = 'lose';
Rules['lizard']['lizard'] = 'draw';
Rules['lizard']['spock'] = 'win';

Rules['spock']['rock'] = 'win';
Rules['spock']['paper'] = 'lose';
Rules['spock']['scissors'] = 'win';
Rules['spock']['lizard'] = 'lose';
Rules['spock']['spock'] = 'draw';

export default Rules;
