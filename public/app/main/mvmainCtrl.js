app.controller('mvmainCtrl', function($scope){
$scope.courses=[
{name: 'JS', featured:true, published: new Date('1/3/2016')},
{name: 'Java', featured:true, published: new Date('2/1/2015')},
{name: 'C#', featured:true, published: new Date('10/4/2015')},
{name: 'Angular', featured:false, published: new Date('2/3/2016')},
{name: 'React', featured:false, published: new Date('2/15/2016')},
{name: 'Math', featured:true, published: new Date('1/1/2015')},
{name: 'Raspberry Pi', featured:false, published: new Date('1/12/2016')},
{name: 'C++', featured:false, published: new Date('1/1/2016')},
{name: 'C', featured:true, published: new Date('1/1/2015')},
{name: 'Linux', featured:true, published: new Date('1/1/2015')},
{name: 'iOS', featured:true, published: new Date('1/2/2015')},
{name: 'Android', featured:true, published: new Date('1/4/2015')},
{name: 'Test1', featured:true, published: new Date('1/5/2015')},
{name: 'Test2', featured:true, published: new Date('1/6/2015')},
{name: 'Windows', featured:true, published: new Date('17/1/2015')},
{name: 'Circuit', featured:true, published: new Date('1/7/2015')},
{name: 'Selenium', featured:false, published: new Date('10/1/2016')},
{name: 'Protractor', featured:false, published: new Date('1/31/2016')},
{name: 'REST', featured:true, published: new Date('1/1/2014')}
]
});