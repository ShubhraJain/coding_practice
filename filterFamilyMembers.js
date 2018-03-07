// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. 
// `filterFamilyMembers` returns an array, in any order, of the full names of family 
// members who pass the passed in truth test.

var filterFamilyMembers = (familyTree, truthTest) => {
  var results = [];

  if (familyTree.children) {
    for (var i = 0; i < familyTree.children.length; i++) {
      results = results.concat(filterFamilyMembers(familyTree.children[i], truthTest));
    }
  }

  if (truthTest(familyTree)) {
    results.push(familyTree.firstName + ' ' + familyTree.lastName)
  }

  return results;
}

var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
} 

console.log(filterFamilyMembers(familyTree, livesInBerkeley));